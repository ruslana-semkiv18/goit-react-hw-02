import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positiveFeedback }) {
  return (
      <div className={css.feedback}>
          <p className={css.good}>Good: {good}</p>
          <p className={css.neutral}>Neutral: {neutral}</p>
          <p className={css.bad}>Bad: {bad}</p>
          <p className={css.total}>Total: {total}</p>
          <p>Positive: {positiveFeedback}%</p>
    </div>
  )
}