import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { module1 } from './content/module1'
import { module2 } from './content/module2'

function ModuleCard({ module, episode }) {
  return (
    <section className="card">
      <h2>{module.title}</h2>
      <p>{module.objective}</p>

      <h3>Key Concepts</h3>
      <ul>{module.keyConcepts.map((c, i) => <li key={`k${episode}-${i}`}>{c}</li>)}</ul>

      <h3>Lesson</h3>
      {module.lesson.map((p, i) => <p key={`l${episode}-${i}`}>{p}</p>)}

      <h3>Memory Hooks</h3>
      <ul>{module.memoryHooks.map((m, i) => <li key={`m${episode}-${i}`}>{m}</li>)}</ul>

      <h3>Animated Video Script (Episode {episode})</h3>
      <ol>{module.videoScript.map((s, i) => <li key={`v${episode}-${i}`}>{s}</li>)}</ol>

      <h3>Checkpoint Quiz (10 Questions)</h3>
      <ol>{module.quiz.map((q, i) => <li key={`q${episode}-${i}`}>{q}</li>)}</ol>

      <h3>Answer Key (Separate)</h3>
      <p>{module.answerKey}</p>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Arizona Life & Health Pre-Licensing</h1>
        <p>Professional tone, easy-to-understand delivery • Module-by-module build</p>
      </header>

      <main className="container">
        <ModuleCard module={module1} episode={1} />
        <ModuleCard module={module2} episode={2} />
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
