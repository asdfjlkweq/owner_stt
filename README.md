# https 연결을 위한 인증서 설치 과정

brew install mkcert

mkcert -install

mkdir -p .cert

mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost"

# 기타 기기 연결을 위한 방법

1. localhost ip확인 - 터미널에 ifconfig 입력 후 나타나는 것 중에서 env0(맥북기준) inet 기억
2. package.json 들어가서 scripts에 "start"를 찾아서 ip 변경(HOST= 부분)
3. 저장 후 원하는 기기로 https://{ip 값}:{port 번호} 입력, port 번호는 대부분의 경우 3000이며 두 서버를 동시에 열었을 때 주의
   --이 때, 신뢰하지 않는 페이지라 떠도 들어가기. api연결할 때 https가 더 유용한 걸로 알고있어서 설정해둠.

# 핸드폰(사용자) 연결 시 주의

- 가로로 회전 후 고정시켜서 띄우기. 아니면 글씨 다 깨짐....(회전 금지 풀고, 회전시키고, 그상태로 다시 회전금지)
