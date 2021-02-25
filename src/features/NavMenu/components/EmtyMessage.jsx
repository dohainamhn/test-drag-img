import React from "react";

function EmtyMessage(props) {
  return (
    <div className="emty-message">
      <div className="box-icon">
        <svg className="icon big-icon">
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{
                stopColor: "#c9cbcc",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: "#f6f6f6",
                stopOpacity: 0.4,
              }}
            />
          </linearGradient>
          <path
            d="M136.502 59.666c7.274 0 14.2 1.284 20.498 3.585C156.08 28.194 121.312 0 78.52 0 35.156 0 0 28.952 0 64.67c0 23.096 14.714 43.355 36.833 54.793v23.427c0 2.71 2.05 3.873 4.557 2.584l31.714-16.304c1.135.062 2.282.079 3.425.106.17.064.17.064 1.992.064.974 0 1.948-.03 2.909-.069 3.71-.116 7.325-.5 10.887-1.017-5.121-6.913-8.128-15.08-8.128-23.85 0-24.669 23.469-44.738 52.313-44.738z"
            fill="url(#grad2)"
          ></path>
        </svg>
        <svg className="icon small-icon">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{
                stopColor: "#fd267d",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: "#ff7854",
                stopOpacity: 1,
              }}
            />
          </linearGradient>
          <path
            d="M137.5 72C115.685 72 98 86.459 98 104.292c0 17.835 17.685 32.291 39.5 32.291h.918c.013 0 .028-.024.041-.03.59-.014 1.183-.021 1.765-.056l4.573 2.334h.003l9.098 4.645c2.516 1.284 4.575.126 4.575-2.574v-9.251C169.6 125.94 177 115.825 177 104.29 177 86.46 159.315 72 137.5 72"
            fill="url(#grad1)"
          ></path>
        </svg>
        <div className="text">
          <h3>Say Hello</h3>

          <p>
            Looking to strike up a conversation? When you match with others, you
            can send them a message under “Matches”
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmtyMessage;
