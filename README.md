### MSA - REACT

## URI
1. localhost:3000/ => 로그인
2. localhost:3000/token => redux 토큰값 확인
3. localhost:3000/test => Material React Table 테스트를 위한 API 및 CORS, TOKEN 확인
## 유저 시나리오 
1. 로그인 후 발급된 accessToken, refreshToken으로 React에서 redux에 저장
2. 다른페이지로 넘어가서 받아온 값을 useSelector 리액트 훅으로 확인 
3. => 추후 개발 예정으로 

## 추후 개발 예정
1. 데이터베이스에서 메뉴, 권한, 사용자 관련 정보를 받아올 예정
2. 권한에 따라서 메뉴를 설정값을 redux에 저장
3. URI 없는 탭 이동 제작 예정
