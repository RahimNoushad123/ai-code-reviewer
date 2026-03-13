import { useState } from "react";
import CodeEditor from "./CodeEditor";
import { reviewCode } from "./api";

function App() {

  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  async function handleReview() {

    const res = await reviewCode(code);
    // setResult(JSON.stringify(res, null, 2));
    setResult(JSON.stringify(res.ai_review, null, 2));
    setReview(res.ai_review);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Smart Code Reviewer</h1>

      <CodeEditor code={code} setCode={setCode} />

      <button onClick={handleReview}>
        Review Code
      </button>

      {review && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Summary</h2>
          <p>{review.summary}</p>

          <h2>Bugs</h2>
          <ul>
            {review.analysis.bugs.map((bug, i) => (
              <li key={i}>
                <strong>{bug.title} ({bug.severity})</strong>: {bug.description}
              </li>
            ))}
          </ul>

          <h2>Security Issues</h2>
          <ul>
            {review.analysis.security_issues.map((sec, i) => (
              <li key={i}>
                <strong>{sec.title} ({sec.severity})</strong>: {sec.description}
              </li>
            ))}
          </ul>

          <h2>Performance Problems</h2>
          <ul>
            {review.analysis.performance_problems.map((perf, i) => (
              <li key={i}>
                <strong>{perf.title} ({perf.severity})</strong>: {perf.description}
                {perf.recommendation && <em> Recommendation: {perf.recommendation}</em>}
              </li>
            ))}
          </ul>

          <h2>Code Style Problems</h2>
          <ul>
            {review.analysis.code_style_problems.map((style, i) => (
              <li key={i}>
                <strong>{style.title} ({style.severity})</strong>: {style.description}
              </li>
            ))}
          </ul>

          <h2>Suggestions</h2>
          <ul>
            {review.analysis.suggestions.map((sugg, i) => (
              <li key={i}>
                <strong>{sugg.title}</strong>: {sugg.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;