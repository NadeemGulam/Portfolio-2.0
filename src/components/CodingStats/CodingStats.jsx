import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import "./CodingStats.css";

const GITHUB_USERNAME = "NadeemGulam";
const LEETCODE_USERNAME = "nadeem10shagulam";

/* ── GitHub native cards ── */

function useGitHubStats(username) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      try {
        // Fetch user profile and repos in parallel
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            { signal: controller.signal }
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const user = await userRes.json();
        const repos = await reposRes.json();

        // Aggregate stars and forks across repos
        let totalStars = 0;
        let totalForks = 0;
        const langBytes = {};

        for (const repo of repos) {
          if (repo.fork) continue; // skip forked repos
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
          if (repo.language) {
            langBytes[repo.language] = (langBytes[repo.language] || 0) + (repo.size || 0);
          }
        }

        // Sort languages by size
        const sortedLangs = Object.entries(langBytes)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 8);

        const totalSize = sortedLangs.reduce((sum, [, size]) => sum + size, 0);

        setStats({
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          totalStars,
          totalForks,
          languages: sortedLangs.map(([name, size]) => ({
            name,
            percent: ((size / totalSize) * 100).toFixed(1),
            size,
          })),
        });
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
    return () => controller.abort();
  }, [username]);

  return { stats, loading, error };
}

/* Palette for language bars */
const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  PHP: "#4F5D95",
  Dockerfile: "#384d54",
  HCL: "#844fba",
  Makefile: "#427819",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  EJS: "#a91e50",
  Nix: "#7e7eff",
};

function getLangColor(name) {
  return LANG_COLORS[name] || "#4db5ff";
}

function GitHubStatsCard({ stats, loading, error }) {
  if (loading) return <CardSkeleton lines={4} />;
  if (error) return <CardError message={error} />;

  const items = [
    { icon: "⭐", label: "Total Stars", value: stats.totalStars },
    { icon: "🍴", label: "Total Forks", value: stats.totalForks },
    { icon: "📦", label: "Public Repos", value: stats.publicRepos },
    { icon: "👥", label: "Followers", value: stats.followers },
  ];

  return (
    <div className="github-stats-native">
      <div className="stats-header">
        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
            -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
            -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
            .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
            2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
            1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        <span>{GITHUB_USERNAME}'s GitHub Stats</span>
      </div>
      <div className="stats-grid">
        {items.map((item) => (
          <div className="stat-item" key={item.label}>
            <span className="stat-icon">{item.icon}</span>
            <div className="stat-info">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopLanguagesCard({ stats, loading, error }) {
  if (loading) return <CardSkeleton lines={5} />;
  if (error) return <CardError message={error} />;

  return (
    <div className="github-stats-native">
      <div className="stats-header">
        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
            -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
            -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
            .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
            2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
            1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        <span>Most Used Languages</span>
      </div>

      {/* Compact language bar */}
      <div className="lang-bar-track">
        {stats.languages.map((lang) => (
          <div
            key={lang.name}
            className="lang-bar-segment"
            style={{
              width: `${lang.percent}%`,
              backgroundColor: getLangColor(lang.name),
            }}
            title={`${lang.name} ${lang.percent}%`}
          />
        ))}
      </div>

      <div className="lang-list">
        {stats.languages.map((lang) => (
          <div className="lang-item" key={lang.name}>
            <span
              className="lang-dot"
              style={{ backgroundColor: getLangColor(lang.name) }}
            />
            <span className="lang-name">{lang.name}</span>
            <span className="lang-pct">{lang.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Shared helpers ── */

function CardSkeleton({ lines = 3 }) {
  return (
    <div className="github-stats-native skeleton-card">
      {Array.from({ length: lines }).map((_, i) => (
        <div className="skeleton-line" key={i} style={{ width: `${70 + Math.random() * 25}%` }} />
      ))}
    </div>
  );
}

function CardError({ message }) {
  return (
    <div className="github-stats-native error-card">
      <span className="error-icon">⚠️</span>
      <p>Failed to load stats</p>
      <small>{message}</small>
    </div>
  );
}

/* ── Main component ── */

const CodingStats = () => {
  const { stats, loading, error } = useGitHubStats(GITHUB_USERNAME);

  return (
    <section id="codingstats">
      <h5>My Coding Activity</h5>
      <h2>Stats</h2>

      <div className="container codingstats__container">
        {/* GitHub Stats */}
        <motion.div
          className="codingstats__group"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>GitHub</h3>
          <div className="codingstats__card">
            <GitHubStatsCard stats={stats} loading={loading} error={error} />
          </div>
          <div className="codingstats__card">
            <TopLanguagesCard stats={stats} loading={loading} error={error} />
          </div>
        </motion.div>

        {/* LeetCode Stats */}
        <motion.div
          className="codingstats__group"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>LeetCode</h3>
          <div className="codingstats__card">
            <img
              src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Poppins&ext=contest&border=0&radius=12`}
              alt="LeetCode Stats"
              loading="lazy"
            />
          </div>
          <div className="codingstats__card">
            <img
              src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Poppins&ext=heatmap&border=0&radius=12`}
              alt="LeetCode Heatmap"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;
