import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  const text_array = ['Full Stack Web Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % text_array.length;
    let fullText = text_array[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(100);
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box
      component="main"
      id="hero"
      sx={{
        flexGrow: 1,
        minHeight: 900,
        backgroundImage: 'url(/galaxy.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h2" fontWeight={'bold'} color="white">
          Dede Harianto
        </Typography>
        <Typography variant="h5" fontWeight={'light'} color="white">
          <span>
            {'{{ '}
            <span className="wrap" style={{ borderRight: '0.08em solid #666' }}>
              {`${text}`}
            </span>
            {' }}'}
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
