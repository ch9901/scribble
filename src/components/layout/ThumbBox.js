import React from "react";
import "./ThumbBox.scss";

export default function ThumbBox() {
  return (
    <ul className="thumb-box">
      <li className="thumb-list news">
        <a className="content-link">
          <div className="thumbnail-box">
            <div className="thumbnail"></div>
          </div>
          <div className="text-box">
            <span className="head">보도자료</span>
            <strong className="title">
              네이버플러스 스토어 AI 쇼핑 실험... 추천 강화하니 재구매, 단골거래
              늘며 안정적 성장 시그널 확인
            </strong>
          </div>
        </a>
      </li>
      <li className="thumb-list">
        <div className="thumbnail"></div>
        <div className="text-box">
          <span className="head">보도자료</span>
          <strong className="title">
            네이버플러스 스토어 AI 쇼핑 실험... 추천 강화하니 재구매, 단골거래
            늘며 안정적 성장 시그널 확인
          </strong>
        </div>
      </li>
      <li className="thumb-list">
        <div className="thumbnail"></div>
        <div className="text-box">
          <span>보도자료</span>
          <strong>
            네이버플러스 스토어 AI 쇼핑 실험... 추천 강화하니 재구매, 단골거래
            늘며 안정적 성장 시그널 확인
          </strong>
        </div>
      </li>
    </ul>
  );
}
