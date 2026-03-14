import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import "./CodingStats.css";

const GITHUB_USERNAME = "NadeemGulam";
const LEETCODE_USERNAME = "nadeem10shagulam";

const THEME = "transparent";
const BG_COLOR = "1f1f38";
const TITLE_COLOR = "4db5ff";
const TEXT_COLOR = "aaa6c3";
const ICON_COLOR = "4db5ff";
const BORDER_COLOR = "2c2c6c";

const CodingStats = () => {
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
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${THEME}&bg_color=${BG_COLOR}&title_color=${TITLE_COLOR}&text_color=${TEXT_COLOR}&icon_color=${ICON_COLOR}&border_color=${BORDER_COLOR}&hide_border=false&count_private=true`}
              alt="GitHub Stats"
              loading="lazy"
            />
          </div>
          <div className="codingstats__card">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=${THEME}&bg_color=${BG_COLOR}&title_color=${TITLE_COLOR}&text_color=${TEXT_COLOR}&border_color=${BORDER_COLOR}&hide_border=false&langs_count=8`}
              alt="Top Languages"
              loading="lazy"
            />
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
