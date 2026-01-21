import React from "react";
import "./Engineering.css";
import DiagramSection from "./DiagramSection";

const Engineering = () => {
    const techStack = [
        { name: "React", desc: "Frontend", icon: "/tech-icons/react.svg" },
        { name: "Spring Boot", desc: "Backend", icon: "/tech-icons/spring.svg" },
        { name: "PostgreSQL", desc: "Database", icon: "/tech-icons/postgresql.svg" },
        { name: "RabbitMQ", desc: "Message Queue", icon: "/tech-icons/rabbitmq.svg" },
        { name: "Redis", desc: "Caching & Locks", icon: "/tech-icons/redis.svg" },
        { name: "Stockfish", desc: "Chess Engine", icon: "/tech-icons/stockfish.svg" },
        { name: "Docker", desc: "Containerization", icon: "/tech-icons/docker.svg" }
    ];

    return (
      <div className="engineering-page">

          {/* HERO */}
          <section className="hero-section">
              <div className="logo-container">
                  <svg className="chess-logo" width="80" height="80" viewBox="0 0 100 100">
                      <circle cx="50" cy="25" r="8" fill="#8FA76F"/>
                      <path d="M45 32 L45 50 L40 50 L35 85 L65 85 L60 50 L55 50 L55 32 Z" fill="#8FA76F"/>
                      <rect x="32" y="85" width="36" height="6" rx="1" fill="#8FA76F"/>
                  </svg>
              </div>
              <h1 className="main-title">ChessHub</h1>
              <p className="subtitle">Engineering Deep Dive</p>
          </section>

          {/* PROBLEM */}
          <section className="problem-section">
              <div className="section-badge">The Problem</div>
              <h2 className="section-title">Why ChessHub Exists</h2>

              <div className="problem-content">
                  <p className="problem-highlight">
                      Watching live chess games is inefficient because important moments are rare and easy to miss.
                  </p>

                  <div className="problem-points">
                      <div className="problem-point">
                          <div className="point-icon">⏱️</div>
                          <p>Games run for hours with long inactive phases</p>
                      </div>
                      <div className="problem-point">
                          <div className="point-icon">👀</div>
                          <p>Viewers must constantly monitor boards</p>
                      </div>
                      <div className="problem-point">
                          <div className="point-icon">⚡</div>
                          <p>Critical moments happen unpredictably</p>
                      </div>
                      <div className="problem-point">
                          <div className="point-icon">🚫</div>
                          <p>No system filters games by importance</p>
                      </div>
                  </div>

                  <div className="solution-box">
                      <span className="solution-arrow">👉</span>
                      <p>
                          ChessHub notifies users only when meaningful events happen —
                          eliminating passive watching and improving engagement.
                      </p>
                  </div>
              </div>
          </section>

          {/* ARCHITECTURE */}
          <DiagramSection
              badge="System Architecture"
              title="High-Level Design"
              description="Microservices-based system for real-time chess analysis"
              image="hld.png"
              fallback="Add High-Level Architecture Diagram"
          />

          <DiagramSection
              badge="Database Design"
              title="ER Diagram — Core Domain"
              description="Users, tournaments, games, and subscriptions"
              image="er_cds.svg"
              fallback="Add Core Domain ER Diagram"
          />

          <DiagramSection
              badge="Database Design"
              title="ER Diagram — Notification Service"
              description="Notification tracking & delivery"
              image="er_notification.svg"
              fallback="Add Notification ER Diagram"
          />

          <DiagramSection
              badge="Service Architecture"
              title="Orchestrator Architecture"
              description="Coordinates game monitoring and events"
              image="orchestrator.svg"
              fallback="Add Orchestrator Diagram"
          />

          <DiagramSection
              badge="Service Architecture"
              title="Engine Service Architecture"
              description="Stockfish pool & analysis execution"
              image="engine_service.svg"
              fallback="Add Engine Diagram"
          />

          <DiagramSection
              badge="Service Architecture"
              title="Notification Service Architecture"
              description="Event-driven delivery system"
              image="notification_service.svg"
              fallback="Add Notification Service Diagram"
          />

          <section className="flow-section">
              <div className="section-badge">System Flow</div>
              <h2 className="section-title">End-to-End Flow</h2>
              <p className="architecture-intro">
                  How a single chess move becomes a real-time notification
              </p>

              <div className="flow-container">
                  {[
                      ["Move Played", "Player makes a move in a live Lichess game"],
                      ["Orchestrator Polls", "Orchestrator detects the new move"],
                      ["Engine Analysis", "Stockfish evaluates position strength"],
                      ["Event Generated", "Move classified as significant"],
                      ["Message Queued", "Event pushed to RabbitMQ"],
                      ["Notification Sent", "User receives alert instantly"]
                  ].map((step, idx) => (
                      <React.Fragment key={idx}>
                          <div className="flow-step">
                              <div className="flow-number">{idx + 1}</div>
                              <div className="flow-content">
                                  <h3>{step[0]}</h3>
                                  <p>{step[1]}</p>
                              </div>
                          </div>
                          {idx < 5 && <div className="flow-arrow">↓</div>}
                      </React.Fragment>
                  ))}
              </div>
          </section>

          <section className="decisions-section">
              <div className="section-badge">Architecture</div>
              <h2 className="section-title">Design Decisions</h2>

              <div className="decisions-grid">
                  <div className="decision-card">
                      <h3>Why RabbitMQ?</h3>
                      <ul>
                          <li>Decouples producers & consumers</li>
                          <li>Reliable delivery with retries</li>
                          <li>Handles traffic spikes safely</li>
                      </ul>
                  </div>

                  <div className="decision-card">
                      <h3>Why Redis?</h3>
                      <ul>
                          <li>Fast distributed locking</li>
                          <li>Coordinates orchestrator workers</li>
                          <li>Avoids duplicate processing</li>
                      </ul>
                  </div>

                  <div className="decision-card">
                      <h3>Why Engine Pool?</h3>
                      <ul>
                          <li>Stockfish startup is expensive</li>
                          <li>Reuse engines efficiently</li>
                          <li>Controlled concurrency</li>
                      </ul>
                  </div>

                  <div className="decision-card">
                      <h3>Why Outbox Pattern?</h3>
                      <ul>
                          <li>Prevents message loss</li>
                          <li>Ensures exactly-once delivery</li>
                          <li>Crash-safe event publishing</li>
                      </ul>
                  </div>
              </div>
          </section>
          <section className="tradeoffs-section">
              <div className="section-badge">Engineering Choices</div>
              <h2 className="section-title">Tradeoffs & Alternatives</h2>

              <div className="tradeoffs-list">
                  <div className="tradeoff-item">
                      <h3>WebSockets vs Polling</h3>
                      <div className="tradeoff-comparison">
                          <div className="tradeoff-choice chosen">
                              <span className="choice-label">Chosen</span>
                              <strong>WebSockets</strong>
                              <p>Real-time, low latency</p>
                          </div>
                          <div className="tradeoff-choice">
                              <span className="choice-label">Alternative</span>
                              <strong>Polling</strong>
                              <p>Simple but inefficient</p>
                          </div>
                      </div>
                  </div>

                  <div className="tradeoff-item">
                      <h3>RabbitMQ vs Kafka</h3>
                      <div className="tradeoff-comparison">
                          <div className="tradeoff-choice chosen">
                              <span className="choice-label">Chosen</span>
                              <strong>RabbitMQ</strong>
                              <p>Task-based processing</p>
                          </div>
                          <div className="tradeoff-choice">
                              <span className="choice-label">Alternative</span>
                              <strong>Kafka</strong>
                              <p>Event streaming, higher complexity</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="tech-stack-section">
              <div className="section-badge">Technologies</div>
              <h2 className="section-title">Tech Stack</h2>

              <div className="tech-grid">
                  {techStack.map((tech, index) => (
                      <div key={index} className="tech-item">
                          <img
                              src={tech.icon}
                              alt={tech.name}
                              loading="lazy"
                              onError={(e) => {
                                  e.target.src =
                                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='55' font-size='40'%3E⚙️%3C/text%3E%3C/svg%3E";
                              }}
                          />
                          <h4>{tech.name}</h4>
                          {/*<p>{tech.desc}</p>*/}
                      </div>
                  ))}
              </div>
          </section>


          {/* FOOTER */}
          <footer className="engineering-footer">
              <p>Built with precision for chess enthusiasts ♟️</p>
          </footer>
      </div>
  );
};

export default Engineering;
