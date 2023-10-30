"use client";

import React from "react";

export const Header_Span = ({ label, className }: any) => {
  return (
    <span className={`block text-4xl font-bold mb-2 ${className}`}>
      {label}
    </span>
  );
};
export const Header_Span_sub = ({ label, className }: any) => {
  return (
    <span className={`inline-block text-4xl font-bold mb-2 ${className}`}>
      {label}
    </span>
  );
};
export const Header_Span_Highlighted_sub = ({ label }: any) => {
  return (
    <span className="inline-block text-4xl font-bold mb-1 text-primary">
      {label}
    </span>
  );
};
export const Header_Span_Description = ({ label }: any) => {
  return <p className="mt-0 mb-4 text-700 line-height-3">{label}</p>;
};
export const Header_Top = ({ label, className }: any) => {
  return (
    <div
      className={`text-900 font-bold text-2xl mb-2 text-center ${className}`}
      style={{ lineHeight: "2rem" }}
    >
      {label}
    </div>
  );
};
export const Header_Top_Description = ({ label }: any) => {
  return (
    <div className={`text-gray-500 text-md lg:text-center line-height-3`}>
      {label}
    </div>
  );
};
export const Header_Top_Span = ({ label, className }: any) => {
  return (
    <div className={`text-700 text-md text-center line-height-3 ${className}`}>
      {label}
    </div>
  );
};

export const HR_Line = ({ className }: { className?: string }) => {
  return (
    <hr
      className={`w-4 mb-4 ${className}`}
      style={{
        height: "4px",
        margin: "10px auto 0px auto",
        borderRadius: "6px",
        background: "#00CCA7",
        padding: "0.7px",
      }}
    />
  );
};

export const AuthHeader = ({ label }: any) => {
  return (
    <p className="text-3xl font-medium text-900 font-bold mb-0">{label}</p>
  );
};

export const AuthDesc = ({ label }: any) => {
  return <p className="mt-0 mb-4 text-700 line-height-3">{label}</p>;
};
