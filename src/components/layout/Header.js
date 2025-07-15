import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-block">
          <h1 className="header-logo">
            <a href="#"></a>
          </h1>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                회사소개
              </a>

              <ul className="submenu">
                <li>
                  <a href="#">소개</a>
                </li>
                <li>
                  <a href="#">주요 계열사</a>
                </li>
                <li>
                  <a href="#">주요연혁</a>
                </li>
                <li>
                  <a href="#">제휴제안</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                서비스
              </a>
            </li>

            <ul className="submenu">
              <li>
                <a href="#">주요 서비스 요약</a>
              </li>
              <li>
                <a href="#">네이버</a>
              </li>
              <li>
                <a href="#">검색</a>
              </li>
              <li>
                <a href="#">광고</a>
              </li>
              <li>
                <a href="#">커머스</a>
              </li>
              <li>
                <a href="#">클라우드</a>
              </li>
              <li>
                <a href="#">핀테크</a>
              </li>
              <li>
                <a href="#">콘텐츠</a>
              </li>
              <li>
                <a href="#">커뮤니티</a>
              </li>
              <li>
                <a href="#">C2C</a>
              </li>
              <li>
                <a href="#">지도</a>
              </li>
              <li>
                <a href="#">전체 서비스 보기</a>
              </li>
            </ul>

            <li className="nav-item">
              <a href="#" className="nav-link">
                기술
              </a>
            </li>

            <ul className="submenu">
              <li>
                <a href="#">주요 기술 요약</a>
              </li>
              <li>
                <a href="#">AI 기술</a>
              </li>
              <li>
                <a href="#">검색 기술</a>
              </li>
              <li>
                <a href="#">로봇 기술</a>
              </li>
              <li>
                <a href="#">디지털 트윈 기술</a>
              </li>
              <li>
                <a href="#">데이터센터 각</a>
              </li>
              <li>
                <a href="#">1784</a>
              </li>
              <li>
                <a href="#">기술상생</a>
              </li>
            </ul>

            <li className="nav-item">
              <a href="#" className="nav-link">
                ESG
              </a>
            </li>

            <ul className="submenu">
              <li>
                <a href="#">주요 ESG 프로그램 요약</a>
              </li>
              <li>
                <a href="#">지속가능경영</a>
              </li>
              <li>
                <a href="#">환경</a>
              </li>
              <li>
                <a href="#">기업윤리</a>
              </li>
              <li>
                <a href="#">인권존중</a>
              </li>
              <li>
                <a href="#">정보보호</a>
              </li>
              <li>
                <a href="#">프로젝트 꽃</a>
              </li>
              <li>
                <a href="#">사회공헌</a>
              </li>
              <li>
                <a href="#">ESG 자료실</a>
              </li>
            </ul>

            <li className="nav-item">
              <a href="#" className="nav-link">
                투자정보
              </a>
            </li>

            <ul className="submenu">
              <li>
                <a href="#">주요 IR 요약</a>
              </li>
              <li>
                <a href="#">기업지배구조</a>
              </li>
              <li>
                <a href="#">IR 일정</a>
              </li>
              <li>
                <a href="#">재무정보</a>
              </li>
              <li>
                <a href="#">IR 자료실</a>
              </li>
            </ul>

            <li className="nav-item">
              <a href="#" className="nav-link">
                미디어
              </a>
            </li>

            <ul className="submenu">
              <li>
                <a href="#">보도자료</a>
              </li>
              <li>
                <a href="#">미디어 행사</a>
              </li>
              <li>
                <a href="#">브랜드 리소스</a>
              </li>
              <li>
                <a href="#">커뮤니케이션 채널</a>
              </li>
            </ul>

            <li className="nav-item">
              <a href="#" className="nav-link">
                스토리
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                채용
              </a>
            </li>
          </ul>

          <li className="nav-item"></li>
          <li className="nav-item"></li>
        </ul>
      </nav>
    </header>
  );
}
