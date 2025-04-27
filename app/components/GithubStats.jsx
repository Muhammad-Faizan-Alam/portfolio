// const GITHUB_TOKEN = "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";


"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import LineProgressBar from "./LineProgressBar";
import AnimatedCounter from "./AnimatedCounter";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const GithubStats = () => {
  const [repos, setRepos] = useState([]);
  const [commitActivity, setCommitActivity] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [totalCommits, setTotalCommits] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "Muhammad-Faizan-Alam";
  const token = "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";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);

        // Calculate language distribution
        const languageMap = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
          }
        });
        const languageData = Object.entries(languageMap).map(([name, value]) => ({
          name,
          value,
        }));
        setLanguages(languageData);

        // Fetch commit activity for each repo and calculate total commits
        let totalCommitsCount = 0;
        const commitActivities = [];

        for (const repo of reposData) {
          const activityResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/stats/commit_activity`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
          const activityData = await activityResponse.json();
          
          if (Array.isArray(activityData)) {
            activityData.forEach((weekData) => {
              totalCommitsCount += weekData.total;
              commitActivities.push({
                week: weekData.week,
                total: weekData.total,
              });
            });
          }
        }

        setTotalCommits(totalCommitsCount);
        setCommitActivity(commitActivities);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch GitHub data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, [username, token]);

  // Process commit activity for chart
  const processCommitActivity = () => {
    const monthlyCommits = {};
    
    commitActivity.forEach((activity) => {
      const date = new Date(activity.week * 1000);
      const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
      
      monthlyCommits[monthYear] = (monthlyCommits[monthYear] || 0) + activity.total;
    });

    return Object.entries(monthlyCommits).map(([month, commits]) => ({
      month,
      commits,
    }));
  };

  const monthlyCommitData = processCommitActivity();

  // Calculate totals
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
  const totalRepos = repos.length;

  if (loading) {
    return (
      <div className="bg-gray-800/70 text-white p-5 rounded-3xl mt-4 text-center">
        Loading GitHub statistics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800/70 p-5 rounded-3xl mt-4 text-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/70 text-white p-5 rounded-3xl mt-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        <LineProgressBar 
          percentage={80} 
          label="GitHub Statistics" 
          color="bg-gradient-to-r from-cyan-500 to-fuchsia-800" 
          textSize="text-2xl" 
        />
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard 
          title="Repositories" 
          value={totalRepos} 
          icon="📦" 
          color="bg-blue-500/20" 
        />
        <StatCard 
          title="Stars" 
          value={totalStars} 
          icon="✨" 
          color="bg-yellow-500/20" 
        />
        <StatCard 
          title="Commits" 
          value={totalCommits} 
          icon="💾" 
          color="bg-green-500/20" 
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 p-4 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-center">Monthly Commits</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyCommitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                <XAxis dataKey="month" stroke="#e5e7eb" />
                <YAxis stroke="#e5e7eb" />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563" }}
                  itemStyle={{ color: "#e5e7eb" }}
                />
                <Bar dataKey="commits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-900/50 p-4 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-center">Top Languages</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languages}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {languages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563" }}
                  itemStyle={{ color: "#e5e7eb" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ title, value, icon, color }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className={`${color} p-4 rounded-xl flex flex-col items-center`}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <div className="text-3xl font-bold">
        <AnimatedCounter from={0} to={value} duration={1.5} />
      </div>
    </motion.div>
  );
};

export default GithubStats;