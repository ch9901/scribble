import React, { useState } from "react";

export default function Header() {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li
            className="nav-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a href="#" className="nav-link active">
              회사소개
            </a>
            {hovered && (
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
            )}
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              서비스
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              기술
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              ESG
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              투자정보
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              미디어
            </a>
          </li>
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
      </nav>
    </header>
  );
}
