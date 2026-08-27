"use client";

import { useEffect, useRef, useState } from "react";
import { defaultPortfolioContent, normalizePortfolioContent } from "./content";
import "./App.css";

const CMS_CONTENT_URL =
  "https://carlos-creative-portfolio.carlospolarislubrica.chatgpt.site/api/content";

export default function Home() {
  const [content, setContent] = useState(defaultPortfolioContent);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const activeIndexRef = useRef(0);
  const feedRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const previewVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const projects = content.projects
    .filter((project) => project.visible)
    .sort((a, b) => a.order - b.order)
    .map((project, index) => ({ ...project, index: String(index + 1).padStart(2, "0") }));
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
  const developmentWork = content.developmentWork
    .filter((project) => project.visible)
    .sort((a, b) => a.order - b.order)
    .map((project, index) => ({ ...project, index: String(index + 1).padStart(2, "0") }));

  useEffect(() => {
    const controller = new AbortController();
    void fetch(CMS_CONTENT_URL, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("CMS unavailable");
        return await response.json() as { content?: unknown };
      })
      .then((payload) => setContent(normalizePortfolioContent(payload.content)))
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.55 },
    );

    previewVideoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [featuredProjects.length]);

  const loopFourSecondPreview = (video: HTMLVideoElement) => {
    if (video.currentTime >= 4) {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    }
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const scrollToProject = (index: number, behavior: ScrollBehavior = "smooth") => {
    const boundedIndex = Math.max(0, Math.min(projects.length - 1, index));
    const feed = feedRef.current;
    if (!feed) return;
    feed.scrollTo({ top: boundedIndex * feed.clientHeight, behavior });
  };

  const openViewer = (index = 0) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    videoRefs.current.forEach((video) => video?.pause());
    setViewerOpen(false);
  };

  useEffect(() => {
    if (!viewerOpen || !feedRef.current) return;

    const previousOverflow = document.body.style.overflow;
    const viewerVideos = videoRefs.current;
    const viewerProjectCount = projects.length;
    const scrollWithinViewer = (index: number, behavior: ScrollBehavior = "smooth") => {
      const boundedIndex = Math.max(0, Math.min(viewerProjectCount - 1, index));
      const feed = feedRef.current;
      if (!feed) return;
      feed.scrollTo({ top: boundedIndex * feed.clientHeight, behavior });
    };
    document.body.style.overflow = "hidden";

    const initialScroll = window.setTimeout(() => {
      scrollWithinViewer(activeIndexRef.current, "auto");
    }, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.reelIndex);
        activeIndexRef.current = index;
        setActiveIndex(index);

        viewerVideos.forEach((video, videoIndex) => {
          if (!video) return;
          if (videoIndex === index) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { root: feedRef.current, threshold: [0.6, 0.8] },
    );

    feedRef.current.querySelectorAll("[data-reel-index]").forEach((item) => observer.observe(item));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowDown") {
        event.preventDefault();
        scrollWithinViewer(activeIndexRef.current + 1);
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        scrollWithinViewer(activeIndexRef.current - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(initialScroll);
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      viewerVideos.forEach((video) => video?.pause());
    };
  }, [projects.length, viewerOpen]);

  const toggleSound = () => {
    setSoundOn((current) => !current);
    const activeVideo = videoRefs.current[activeIndexRef.current];
    if (activeVideo) void activeVideo.play().catch(() => undefined);
  };

  return (
    <main id="top">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top">CARLOS POLARIS R. LUBRICA</a>
        <span className="role">VIDEO EDITOR / DEVELOPER</span>
        <div className="navLinks">
          <a href="#work">VIDEO</a>
          <a href="#development">DEV</a>
          <a href="#profile">PROFILE</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <header className="hero shell">
        <div className="heroLabel">{content.general.heroEyebrow}</div>
        <h1>{content.general.heroTitleFirst}<br /><span>+</span> {content.general.heroTitleSecond}</h1>
        <div className="heroBottom">
          <p>{content.general.heroIntro}</p>
          <a className="textLink" href="#work">VIEW VIDEO WORK <span>↘</span></a>
        </div>
      </header>

      <section className="work shell" id="work">
        <div className="sectionTitle">
          <span>01</span><h2>SELECTED VIDEO WORK</h2><span>{String(featuredProjects.length).padStart(2, "0")} FEATURED / {String(projects.length).padStart(2, "0")} TOTAL</span>
        </div>

        <div className="previewGrid">
          {featuredProjects.map((project, index) => (
            <button className="previewCard" type="button" onClick={() => openViewer(projects.findIndex((item) => item.id === project.id))} key={project.id} aria-label={`Open ${project.title}`}>
              <div className="projectMeta"><span>{project.index}</span><span>{project.discipline}</span></div>
              <div className="previewMedia">
                <video
                  ref={(node) => { previewVideoRefs.current[index] = node; }}
                  data-preview-index={index}
                  muted
                  playsInline
                  preload="metadata"
                  poster={project.thumbnail ?? project.poster}
                  onTimeUpdate={(event) => loopFourSecondPreview(event.currentTarget)}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <source src={project.src} type="video/mp4" />
                </video>
                <span className="thumbTag">{project.index} / LOOPING PREVIEW</span>
                <span className="playMark">WATCH FULL ↗</span>
              </div>
              <div className="projectText">
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
                <small>{project.format}</small>
              </div>
            </button>
          ))}
        </div>

        <div className="workActions">
          <p>{featuredProjects.length} selected previews. Open the complete reel archive to browse all {projects.length}.</p>
          <button type="button" onClick={() => openViewer(0)}>VIEW ALL WORK <span>↘</span></button>
        </div>
      </section>

      <section className="development" id="development">
        <div className="shell">
          <div className="sectionTitle developmentTitle"><span>02</span><h2>DEVELOPMENT + PRODUCT MOTION</h2><span>MOBILE / WEB / SAAS</span></div>
          <div className="developmentIntro">
            <p className="developmentLead">{content.general.developmentLeadFirst}<br />{content.general.developmentLeadSecond}</p>
            <div className="developmentSummary">
              <span>WHY IT HELPS</span>
              <p>{content.general.developmentSummary}</p>
            </div>
          </div>

          <div className="developmentGrid">
            {developmentWork.map((project) => (
              <article className="developmentCard" key={project.index}>
                <div className="developmentMeta">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="developmentOrg">{project.organization}</p>
                <p className="developmentDescription">{project.description}</p>
                <div className="stackList" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <small>{project.impact}</small>
              </article>
            ))}
          </div>

          <div className="developerCredentials">
            <span>BS INFORMATION TECHNOLOGY • CUM LAUDE</span>
            <span>REACT NATIVE • EXPO • LARAVEL • FIREBASE • REST APIS • MYSQL</span>
          </div>
        </div>
      </section>

      <section className="profile" id="profile">
        <div className="shell profileGrid">
          <div className="sectionTitle profileTitle"><span>03</span><h2>PROFILE</h2></div>
          <div className="statement">
            <p>{content.general.profileStatement}</p>
          </div>
          <div className="bio">
            <p>{content.general.bioFirst}</p>
            <p>{content.general.bioSecond}</p>
          </div>
          <div className="services">
            <div className="serviceLine">
              <strong>VIDEO PRODUCTION AND EDITING</strong>
              {content.videoServices.map((service) => <span key={service}>{service}</span>)}
            </div>
            <div className="serviceLine">
              <strong>SOFTWARE DEVELOPMENT</strong>
              {content.developmentServices.map((service) => <span key={service}>{service}</span>)}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell">
          <div className="sectionTitle footerTitle"><span>04</span><h2>CONTACT</h2><span>{content.general.availability}</span></div>
          <p className="contactLead">{content.general.contactLeadFirst}<br />{content.general.contactLeadSecond}</p>
          <div className="contactBar">
            <p>{content.general.contactIntro}</p>
            <div className="contactLinks">
              <a href={`mailto:${content.contact.email}`}><span>EMAIL</span>{content.contact.email} ↗</a>
              <a href={`tel:${content.contact.phoneHref}`}><span>MOBILE</span>{content.contact.phoneDisplay} ↗</a>
              <a href={content.contact.linkedInUrl} target="_blank" rel="noreferrer"><span>LINKEDIN</span>{content.contact.linkedInLabel} ↗</a>
            </div>
          </div>
          <div className="footerBottom"><span>© 2026 CARLOS POLARIS R. LUBRICA</span><a href="#top">BACK TO TOP ↑</a></div>
        </div>
      </footer>

      {viewerOpen && (
        <div className="reelViewer" role="dialog" aria-modal="true" aria-label="All selected work">
          <div className="viewerChrome">
            <span>CARLOS POLARIS R. LUBRICA / SELECTED WORK</span>
            <span className="viewerCount" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <button type="button" className="soundButton" onClick={toggleSound}>{soundOn ? "SOUND ON" : "SOUND OFF"}</button>
            <button type="button" className="closeButton" onClick={closeViewer} autoFocus>CLOSE ×</button>
          </div>

          <div className="reelFeed" ref={feedRef}>
            {projects.map((project, index) => (
              <article className="reel" data-reel-index={index} key={project.index}>
                <div className="reelInner">
                  <div className={`reelStage reelStage--${project.shape}`}>
                    <video
                      ref={(node) => { videoRefs.current[index] = node; }}
                      controls
                      playsInline
                      loop
                      muted={!soundOn}
                      preload={index < 2 ? "metadata" : "none"}
                      poster={project.poster}
                      aria-label={`Play ${project.title}`}
                    >
                      <source src={project.src} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  </div>
                  <div className="reelCopy">
                    <div className="reelMeta"><span>{project.index}</span><span>{project.discipline}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.detail}</p>
                    <small>{project.format}</small>
                    <span className="scrollCue">SCROLL FOR NEXT ↓</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="viewerNav" aria-label="Reel navigation">
            <button type="button" onClick={() => scrollToProject(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous project">↑</button>
            <button type="button" onClick={() => scrollToProject(activeIndex + 1)} disabled={activeIndex === projects.length - 1} aria-label="Next project">↓</button>
          </div>
        </div>
      )}
    </main>
  );
}
