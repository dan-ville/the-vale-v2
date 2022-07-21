import IconInterface from "./icon"

const Sazen: React.FC<IconInterface> = ({
  color,
  width = 93,
  height = 95,
  viewBox = "0 0 93 95",
}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.1277 29.6032C38.1277 30.8292 37.8914 32.0433 37.4324 33.176C36.9734 34.3088 36.3007 35.338 35.4526 36.205C34.6044 37.0719 33.5976 37.7596 32.4895 38.2288C31.3814 38.698 30.1937 38.9395 28.9943 38.9395M28.9943 38.9395C27.7949 38.9395 26.6072 38.698 25.4991 38.2288C24.391 37.7596 23.3841 37.0719 22.536 36.205C21.6879 35.338 21.0151 34.3088 20.5561 33.176C20.0971 32.0433 19.8609 30.8292 19.8609 29.6032M28.9943 38.9395V2M19.8609 29.6032V19.8609M19.8609 29.6032C19.8609 35.8764 15.3256 38.9885 10.8258 38.9395M19.8609 2V19.8609M19.8609 2H10.8258M19.8609 2H28.9943M10.8258 2L19.8609 19.8609M10.8258 2V38.9395M19.8609 19.8609C19.8609 19.8609 28.1823 2 28.9943 2M2 29.6032C2 35.7791 6.39572 38.8913 10.8258 38.9395"
        stroke={color}
        stroke-width="2.07525"
      />
    </svg>
  )
}

export default Sazen
