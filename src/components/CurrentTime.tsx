import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center animate-fade-in">
      <div className="time-display text-7xl md:text-8xl font-bold tracking-tight gradient-text mb-2">
        {format(time, 'HH:mm')}
      </div>
      <div className="time-display text-2xl text-muted-foreground font-light">
        {format(time, 'ss')}
      </div>
      <div className="text-lg text-muted-foreground mt-4">
        {format(time, 'EEEE, MMMM d, yyyy')}
      </div>
    </div>
  );
};
