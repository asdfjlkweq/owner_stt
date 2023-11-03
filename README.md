# 기타 기기 연결을 위한 방법

1. localhost ip확인 - 터미널에 ifconfig 입력 후 나타나는 것 중에서 env0(맥북기준) inet 기억
2. package.json 들어가서 scripts에 "start"를 찾아서 ip 변경(HOST= 부분)
3. 저장 후 원하는 기기로 https://{ip 값}:{port 번호} 입력, port 번호는 대부분의 경우 3000이며 두 서버를 동시에 열었을 때 주의
   --이 때, 신뢰하지 않는 페이지라 떠도 들어가기. api연결할 때 https가 더 유용한 걸로 알고있어서 설정해둠.
