import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-container">
      {/* 배경 은은한 그라데이션 빛 효과 */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <div className="hero-content">
        {/* 태그 스타일의 상단 타이틀 */}
        <div className="tag-badge">Full-Stack Developer</div>

        {/* 메인 타이핑 슬로건 */}
        <h1 className="main-title">
          서버와 클라이언트를 연결하고,<br />
          <span className="highlight-text">사람과 사람을 연결합니다.</span>
        </h1>

        <p className="sub-description">
          단순히 작동하는 코드를 넘어, 팀의 신뢰를 바탕으로 비즈니스를 완성하는 풀스택 개발자입니다.
        </p>

        {/* 책임감 & 소통 핵심 가치 카드 섹션 */}
        <div className="card-group">
          {/* 책임감 카드 */}
          <div className="value-card accountability-card">
            <div className="card-icon pulse-icon">✓</div>
            <h3>끝까지 완수하는 책임감</h3>
            <p>견고한 인프라와 예외 처리를 통해 어떤 상황에서도 멈추지 않는 서비스를 만듭니다.</p>
          </div>

          {/* 소통 카드 */}
          <div className="value-card communication-card">
            <div className="card-icon wave-icon">💬</div>
            <h3>경계를 허무는 소통 능력</h3>
            <p>기획자, 디자이너의 언어를 이해하고 기술적 가능성으로 전환하는 가교 역할을 합니다.</p>
          </div>
        </div>

        {/* 프로젝트 보러가기 버튼 */}
        <button className="cta-button">
          포트폴리오 보기
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}