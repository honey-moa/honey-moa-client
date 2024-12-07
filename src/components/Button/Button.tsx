'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from './button.css';
import React from 'react';

interface ButtonProps {
  text: string;
  colorType: '#F43F5E' | '#DC2626' | '#FFE4E6' | '#FFFFFF';
  icon?: string | React.ReactNode;
  iconPosition?: 'left' | 'right';
  link?: string;
  onClick?: () => void;
}

/**
 * 공통으로 사용되는 버튼 UI컴포넌트
 * @param text | 버튼 텍스트
 * @param colorType | 버튼 색상
 * @param icon | 버튼 아이콘 (optional) 이미지 경로로 삽입
 * @param iconPosition | 버튼 아이콘 위치 (optional) - left | right
 * @param link | 버튼 클릭@ 시 이동할 링크 (optional)
 * @param onClick | 버튼 클릭 시 실행할 함수 (optional)
 */
export default function Button(props: ButtonProps) {
  //vanilla extract에서 나는 에러
  //서버 컴포넌트 -> 클라이언트 컴포넌트로 props로 넘겨줄 때 serialize(직렬화)해주지 않으면 생기는 오류
  //style={{--colorVar__5mo7u30: "#F43F5E"}} 이 처럼, 데이터가 하나의 문자열로 직열화 되지 않음
  const inlineStyles = JSON.parse(
    JSON.stringify(
      assignInlineVars({
        [style.colorVar]: props.colorType,
        [style.hoverColorVar]: getHoverColor(props.colorType),
        [style.fontColorVar]: getFontColor(props.colorType),
      })
    )
  );

  if (props.icon) {
    return (
      <button
        onClick={props.onClick}
        className={style.container}
        style={inlineStyles}
      >
        {renderWidthIconPosition(props.iconPosition, props.text, props.icon)}
      </button>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className={style.container}
      style={inlineStyles}
    >
      {props.text}
    </button>
  );
}

function LeftIconButton({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <>
      <div className={style.icon}>{icon}</div>
      <div className={style.text}>{text}</div>
    </>
  );
}

function RightIconButton({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <>
      <div className={style.text}>{text}</div>
      <div className={style.icon}>{icon}</div>
    </>
  );
}

function renderWidthIconPosition(
  iconPosition: ButtonProps['iconPosition'],
  text: ButtonProps['text'],
  icon: ButtonProps['icon']
) {
  const obj = {
    left: <LeftIconButton text={text} icon={icon} />,
    right: <RightIconButton text={text} icon={icon} />,
  } as const;
  return iconPosition && obj[iconPosition];
}

function getHoverColor(colorType: ButtonProps['colorType']) {
  const obj = {
    '#F43F5E': '#dc2626',
    '#DC2626': '#dc2626b3',
    '#FFE4E6': '#ffe4e6ba',
    '#FFFFFF': '#E5E7EB',
  } as const;
  return obj[colorType];
}

function getFontColor(colorType: ButtonProps['colorType']) {
  const obj = {
    '#F43F5E': '#FFFFFF',
    '#DC2626': '#FFFFFF',
    '#FFE4E6': '#DC2626',
    '#FFFFFF': '#000000',
  } as const;
  return obj[colorType];
}
