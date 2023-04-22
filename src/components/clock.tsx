import { h } from "preact";
import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { styled } from "goober";
import { format } from "date-fns/fp";

interface CurrentTime {
  time: string;
  date: string;
}

export function Clock() {
  const intervalId = useRef<number | null>(null);
  const [currentTime, setCurrentTime] = useState<CurrentTime>({
    time: "",
    date: "",
  });

  useLayoutEffect(() => {
    intervalId.current = setInterval(() => {
      const now = Date.now();
      const time = format("HH:mm", now);
      const date = format("MM/dd (EEEE)", now);
      setCurrentTime({ time, date });
    }, 1000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <>
      <div>
        <StyledDate dateTime={currentTime.date}>{currentTime.date}</StyledDate>
      </div>
      <div>
        <StyledTime dateTime={currentTime.time}>{currentTime.time}</StyledTime>
      </div>
    </>
  );
}

const BaseTime = styled("time")`
  font-family: BlinkMacSystemFont;
  font-weight: 500;
`;

const StyledTime = styled(BaseTime)`
  font-size: 170px;
`;
const StyledDate = styled(BaseTime)`
  font-size: 50px;
`;
