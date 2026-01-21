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
            <section className="hero-section">
                <div className="hero-wrapper">

                    <div className="hero-icon">
                        <svg viewBox="0 0 64 64">
                            <path
                                d="M32 6C27.5 6 24 9.5 24 14c0 3 1.5 5.5 4 7l-2 9
             c-5 1.5-8 6-8 11v3h28v-3c0-5-3-9.5-8-11l-2-9
             c2.5-1.5 4-4 4-7 0-4.5-3.5-8-8-8z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    <h1 className="hero-title">
                        Engineering behind <span>ChessHub</span>
                    </h1>

                    <p className="hero-subtitle">
                        A deep dive into the design decisions, architecture, and trade-offs
                        behind building a real-time chess notification system.
                    </p>

                    <div className="hero-divider"/>

                    <div className="hero-expect">
                        <h3>What to expect</h3>

                        <p>
                            We’ll start by understanding <b>what problem ChessHub solves</b>,
                            then move into the <b>high-level system design</b>, followed by the
                            <b>database schema</b> and <b>service breakdown</b>.
                        </p>

                        <p>
                            After that, we’ll walk through the <b>end-to-end request flow</b>,
                            discuss <b>design decisions & trade-offs</b>, and wrap up with the
                            <b>tech stack</b>.
                        </p>

                        <p className="hero-start">Let’s begin.</p>
                    </div>
                </div>
            </section>

            <section className="story-section">
                <div className="story-divider"/>

                <h2 className="story-title">Once upon a time...</h2>

                <p className="story-text">
                    Watching live chess feels exciting at first. But in reality, most games move slowly,
                    and the moments that actually matter are easy to miss.
                </p>

                <p className="story-text">
                    You either sit and watch for hours, or look away for a moment and miss the blunder,
                    tactic, or turning point that decided the game.
                </p>

                <p className="story-text">
                    That’s where <strong>ChessHub</strong> comes in — built to surface only the
                    moments worth watching.
                </p>

                <div className="story-divider"/>
            </section>


            {/* ARCHITECTURE */}
            <DiagramSection
                badge="System Architecture"
                title="High-Level Design"
                description="Microservices-based system for real-time chess analysis"
                image="hld.svg"
                fallback="Add High-Level Architecture Diagram"
            />

            <DiagramSection
                badge="Database Design"
                title="ER Diagram — Core Domain"
                description="Users, preferences and subscriptions"
                image="er_cds_user.svg"
                fallback="Add Core Domain ER Diagram"
            />

            <DiagramSection
                badge="Database Design"
                title="ER Diagram — Core Domain"
                description="Tournaments, rounds, games, and moves"
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
                title="Analysis Orchestrator Architecture"
                description="Brain of the sytem classifies moves in Brilliant, Blunder etc."
                image="analysis_orchestrator.svg"
                fallback="Add Analysis Orchestrator Diagram"
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

            <DiagramSection
                badge="System flow"
                title="End to End flow"
                description=""
                image="e2e.svg"
                fallback="Add Notification Service Diagram"
            />
            {/*<section className="flow-section">*/}
            {/*    <div className="section-badge">System Flow</div>*/}
            {/*    <h2 className="section-title">End-to-End Flow</h2>*/}
            {/*    <p className="architecture-intro">*/}
            {/*        How a single chess move becomes a real-time notification*/}
            {/*    </p>*/}

            {/*    <div className="flow-container">*/}
            {/*        {[*/}
            {/*            ["Move Played", "Player makes a move in a live game"],*/}
            {/*            ["Orchestrator Detects", "Orchestrator detects through BroadcastActivityDetector"],*/}
            {/*            ["Engine Analysis", "Stockfish evaluates position strength"],*/}
            {/*            ["Event Generated", "Move classified as significant"],*/}
            {/*            ["Message Queued", "Event pushed to RabbitMQ"],*/}
            {/*            ["Notification Sent", "User receives alert instantly"]*/}
            {/*        ].map((step, idx) => (*/}
            {/*            <React.Fragment key={idx}>*/}
            {/*                <div className="flow-step">*/}
            {/*                    <div className="flow-number">{idx + 1}</div>*/}
            {/*                    <div className="flow-content">*/}
            {/*                        <h3>{step[0]}</h3>*/}
            {/*                        <p>{step[1]}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                {idx < 5 && <div className="flow-arrow">↓</div>}*/}
            {/*            </React.Fragment>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="decisions-section">
                <div className="section-badge">Architecture</div>
                <h2 className="section-title">Design Decisions</h2>

                <div className="decisions-grid">


                    <div className="decision-card">
                        <h3>Why Microservices architecture?</h3>
                        <ul>
                            <li>Different services have different load patterns</li>
                            <li>Independent scaling of core, engine, and notifications</li>
                            <li>Fault isolation for better reliability</li>
                        </ul>
                    </div>

                    <div className="decision-card">
                        <h3>Why RabbitMQ?</h3>
                        <ul>
                            <li>Enables event-driven, asynchronous processing</li>
                            <li>Reliable delivery with retries</li>
                            <li>Handles traffic spikes safely</li>
                            <li>Supports CQRS between core domain and notification services</li>
                        </ul>
                    </div>

                    <div className="decision-card">
                        <h3>Why Redis?</h3>
                        <ul>
                            <li>Fast distributed locking</li>
                            <li>Coordinates orchestrator workers</li>
                            <li>Used in game state management in orchestrator</li>
                            <li>Avoids duplicate processing</li>
                        </ul>
                    </div>

                    <div className="decision-card">
                        <h3>Why Engine Pool?</h3>
                        <ul>
                            <li>Avoids costly engine re-initialization</li>
                            <li>Efficient reuse of running instances</li>
                            <li>Controlled parallel analysis</li>
                            <li>Prevents resource exhaustion</li>
                        </ul>
                    </div>

                    <div className="decision-card">
                        <h3>Why WebSockets?</h3>
                        <ul>
                            <li>Real-time game updates to clients</li>
                            <li>Push-based state & move updates</li>
                            <li>Eliminates polling overhead</li>
                            <li>Essential for real-time user experience</li>
                        </ul>
                    </div>

                    <div className="decision-card">
                        <h3>Why CQRS (Separate Read Model)?</h3>
                        <ul>
                            <li>Enables low-latency notification reads</li>
                            <li>Keeps core write operations isolated</li>
                            <li>Prevents notification load from affecting main DB</li>
                        </ul>
                    </div>
                    <div className="decision-card">
                        <h3>Why Postgres?</h3>
                        <ul>
                            <li>Data is highly relational</li>
                            <li>Strong consistency guarantees</li>
                            <li>ACID-compliant transactions</li>
                            <li>Well-suited for complex queries</li>
                            <li>No need for schema flexibility</li>
                        </ul>
                    </div>

                    <div className="decision-card">
                        <h3>Why Outbox Pattern?</h3>
                        <ul>
                            <li>Prevents message loss</li>
                            <li>Ensures exactly-once delivery</li>
                            <li>Guarantees delivery consistency</li>
                            <li>Crash-safe message handling</li>
                            <li>Works well with event-driven systems</li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className="scaling-section">
                <span className="section-badge">Metrics</span>
                <h2 className="section-title">Performance & Scaling</h2>

                <div className="scaling-grid">

                    <div className="scaling-card">
                        <h3>Game Processing Scale</h3>
                        <p>
                            Multiple games are analyzed concurrently using a pooled engine model.
                            Each move is evaluated independently, allowing CPU-bound workloads to
                            scale horizontally.
                        </p>
                    </div>

                    <div className="scaling-card">
                        <h3>Back-of-the-Envelope</h3>
                        <p>
                            ~10–12 rounds × 30 games × 50 moves
                            ≈ <strong>18,000 evaluations</strong><br/>
                            Each taking ~50–100ms, efficiently handled via parallel engine workers.
                        </p>
                    </div>

                    <div className="scaling-card">
                        <h3>Engine Scaling</h3>
                        <p>
                            Engine calls are stateless and parallelizable.
                            Scaling is achieved by adding more engine instances — no system redesign required.
                        </p>
                    </div>

                    <div className="scaling-card">
                        <h3>Client & Notification Scale</h3>
                        <p>
                            User traffic scales independently from game processing.
                            CDS and notification services scale horizontally without affecting engine throughput.
                        </p>
                    </div>

                    <div className="scaling-card">
                        <h3>Event-Driven by Design</h3>
                        <p>
                            Asynchronous queues absorb spikes and decouple workloads,
                            ensuring stable performance during high-traffic tournaments.
                        </p>
                    </div>

                    <div className="scaling-card">
                        <h3>Built for Growth</h3>
                        <p>
                            Supports 10×–100× scale by independently scaling
                            engine workers, notification services, and WebSocket layers.
                        </p>
                    </div>

                </div>
            </section>
            <section className="tradeoffs-section">
                <div className="section-badge">Engineering Choices</div>
                <h2 className="section-title">Tradeoff's and What I'd improve</h2>

                <div className="tradeoffs-list">

                    {/* WebSockets */}
                    <div className="tradeoff-item">
                        <h3>Real-Time Delivery</h3>
                        <div className="tradeoff-comparison">
                            <div className="tradeoff-choice chosen">
                                <span className="choice-label">Chosen</span>
                                <strong>WebSockets</strong>
                                <p>
                                    Enables low-latency, server-push updates for live games.
                                    Keeps clients synchronized without redundant polling.
                                </p>
                            </div>

                            <div className="tradeoff-choice">
                                <span className="choice-label">Alternative</span>
                                <strong>Polling</strong>
                                <p>
                                    Simpler to implement but inefficient at scale and introduces
                                    unnecessary latency.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Messaging */}
                    <div className="tradeoff-item">
                        <h3>Event Processing</h3>
                        <div className="tradeoff-comparison">
                            <div className="tradeoff-choice chosen">
                                <span className="choice-label">Chosen</span>
                                <strong>RabbitMQ</strong>
                                <p>
                                    Ideal for task-based workloads, retries, and fan-out messaging
                                    with low operational overhead.
                                </p>
                            </div>

                            <div className="tradeoff-choice">
                                <span className="choice-label">Alternative</span>
                                <strong>Kafka</strong>
                                <p>
                                    Better suited for large-scale event streaming but adds
                                    complexity unnecessary for current system needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Execution Model */}
                    <div className="tradeoff-item">
                        <h3>Execution Model</h3>
                        <div className="tradeoff-comparison">
                            <div className="tradeoff-choice chosen">
                                <span className="choice-label">Current</span>
                                <strong>Thread Pools + Async Processing</strong>
                                <p>
                                    Uses multithreaded workers and async execution to process
                                    engine evaluations efficiently with controlled concurrency.
                                </p>
                            </div>

                            <div className="tradeoff-choice">
                                <span className="choice-label">Future</span>
                                <strong>Reactive (Spring WebFlux)</strong>
                                <p>
                                    Move to a fully non-blocking model to improve resource
                                    utilization and support higher concurrency with fewer threads.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Notification Intelligence */}
                    <div className="tradeoff-item">
                        <h3>Notification Generation</h3>
                        <div className="tradeoff-comparison">
                            <div className="tradeoff-choice chosen">
                                <span className="choice-label">Current</span>
                                <strong>Rule-Based Notifications</strong>
                                <p>
                                    Notifications are generated using deterministic rules
                                    based on game events and user preferences.
                                </p>
                            </div>

                            <div className="tradeoff-choice">
                                <span className="choice-label">Future</span>
                                <strong>AI-Based Notification Engine</strong>
                                <p>
                                    Use ML models to rank importance, reduce noise, and send
                                    personalized notifications based on user behavior.
                                </p>
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
                            <p>{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* FOOTER */}
            <footer className="engineering-footer">
                <p className="footer-text">
                    Designed and built with <span className="heart">❤️</span> by{" "}
                    <span className="name">Vansh</span>
                </p>

                <div className="footer-icons">
                    <a
                        href="https://github.com/vansh-005"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="ri-github-line"></i>
                    </a>

                    <a
                        href="https://linkedin.com/in/vansh-deep-singh-5b8819280/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="ri-linkedin-line"></i>
                    </a>


                </div>
            </footer>


        </div>
    );
};

export default Engineering;
