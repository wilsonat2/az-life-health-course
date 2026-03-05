import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { module1 } from './content/module1'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Arizona Life & Health Pre-Licensing</h1>
        <p>Professional tone, easy-to-understand delivery • Module-by-module build</p>
      </header>

      <main className="container">
        <section className="card">
          <h2>{module1.title}</h2>
          <p>{module1.objective}</p>
          <h3>Key Concepts</h3>
          <ul>{module1.keyConcepts.map((c, i) => <li key={i}>{c}</li>)}</ul>

          <h3>Lesson</h3>
          {module1.lesson.map((p, i) => <p key={i}>{p}</p>)}

          <h3>Memory Hooks</h3>
          <ul>{module1.memoryHooks.map((m, i) => <li key={i}>{m}</li>)}</ul>

          <h3>Animated Video Script (Episode 1)</h3>
          <ol>{module1.videoScript.map((s, i) => <li key={i}>{s}</li>)}</ol>

          <h3>Checkpoint Quiz (10 Questions)</h3>
          <ol>{module1.quiz.map((q, i) => <li key={i}>{q}</li>)}</ol>
        </section>

        <section className="card">
          <h3>Answer Key (Separate)</h3>
          <p>{module1.answerKey}</p>
        </section>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
