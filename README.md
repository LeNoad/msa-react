### MSA - REACT
URI
1. localhost:3000/ => 로그인
2. localhost:3000/token => redux 토큰값 확인

유저 시나리오 
1. 로그인 후 발급된 accessToken, refreshToken으로 React에서 redux에 저장
2. 다른페이지로 넘어가서 받아온 값을 useSelector 리액트 훅으로 확인 
3. 아직 미정 **