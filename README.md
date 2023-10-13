# Backend
## 큐시즘 28기 해커톤 F팀 "텀블러 키우기(텀블리)"
![landing9](https://github.com/Kusitms-28th-Kukathon-F/Frontend/assets/97966640/be660925-d517-4ffa-9bad-5a72bb18478c)

<br>

## 🔉 R&R
| 분야 | 이름 | 포지션 |
| --- | --- | --- |
| 기획 | 박형준 | 📈 PM, 서비스 기획 |
| 기획 | 김대헌 | 📈 서비스 기획 |
| 기획 | 이수영 | 📈 서비스 기획 |
| 디자인 | 권예인 | 📢 서비스 디자인 |
| 개발 | [김승훈](https://github.com/seungzzok) | 📱 Web 화면 UI 구현, 서버 연동 |
| 개발 | [안재국](https://github.com/jk6722) | 📱 Web 화면 UI 구현, 서버 연동 |
| 개발 | [오진영](https://github.com/OJOJIN) | 💻 DB 및 API 구축 |
| 개발 | [한호정](https://github.com/hojeong2747) | 🖥️ DB 및 API 구축, 서버 배포 |

<br>

## 📺 시연 영상
https://github.com/Kusitms-28th-Kukathon-F/Frontend/assets/97966640/fe76862b-96ac-4efe-802a-069b98c68c1b

<br>

## 🔍 System Architecture

<img width="6050" alt="arch" src="https://github.com/Kusitms-28th-Kukathon-F/Backend/assets/98451999/1335e057-333d-4656-9161-23311ff51ecc">


<br>
<br>

## :computer: Technology

- Web
    - ![javacript](https://img.shields.io/badge/javacript-F54A2A?style=flat-square&logo=javacript&logoColor=white)
    - ![react](https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white)
      ![axios](https://img.shields.io/badge/axios-DB5C3F?style=flat-square&logo=axios&logoColor=white)
      ![recoil](https://img.shields.io/badge/recoil-f26b00?style=flat-square&logo=recoil&logoColor=white)
      ![styledcomponents](https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
    - ![vite](https://img.shields.io/badge/vite-646CFF?style=flat-square&logo=vite&logoColor=white)
- Server
    - ![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ%20IDEA-000000.svg?style=flat-square&logo=intellij-idea&logoColor=white)
      ![Java](https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=Java&logoColor=white)
      ![Springboot](https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
      ![Shell Script](https://img.shields.io/badge/Shell_Script-%23121011.svg?style=flat-square&logo=gnu-bash&logoColor=white)
      ![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=flat-square&logo=Gradle&logoColor=white)
      ![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=flat-square&logo=spring&logoColor=white)
    - ![MySQL](https://img.shields.io/badge/MySQL-%2300f.svg?style=flat-square&logo=mysql&logoColor=white)
      ![RDS](https://img.shields.io/badge/AWS%20RDS-527FFF?style=flat-square&logo=Amazon%20RDS&logoColor=white)
      ![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=flat-square&logo=Hibernate&logoColor=white)
    - ![GitHub Actions](https://img.shields.io/badge/Github%20Actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white)
      ![EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=flat-square&logo=Amazon%20EC2&logoColor=white)
      ![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white)
      ![Nginx](https://img.shields.io/badge/Nginx-%23009639.svg?style=flat-square&logo=nginx&logoColor=white)
- Co-working Tool
    - ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=flat-square&logo=swagger&logoColor=white)
      ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)

<br>
<br>

## 📢개발팀 행동 강령📢

### 📕 커밋 컨벤션

커밋 메세지는 <b>[이슈번호, 기능 키워드, 커밋 내용]</b>으로 작성할 것!

ex) `git commit -m "#8 feat : 앱 설치 플로팅 배너 추가 `

- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `chore` : 빌드 업무, 패키지 매니저, 라이브러리, dependencies 설정
- `docs` : 문서 수정 - ex) README.md
- `design` : 사용자 UI 디자인 변경 - ex) CSS
- `style` : 기능 수정 없는 코드 스타일 변경
- `refactor` : 코드 리팩터링
- `test` : 테스트 코드, 리펙토링 테스트 코드 추가
- `ci` : ci 설정 파일 수정
- `perf` : 성능 개선
- `rename` : 파일 혹은 폴더명 변경
- `add` : 파일 추가

<br>

### 📙 Git Flow 전략

- `main` : 출시 가능한 프로덕션 코드의 브랜치
  - `Tag`를 이용하여 배포 버전 명시
- `develop` : 다음 버전을 개발하는 브랜치
- `feat` : 기능을 개발하는 브랜치
  - `feat/개발할 기능`으로 네이밍 할 것
  - main 또는 develop으로 merge할 때는 `--no-ff` 반드시 사용할 것
- `hotfix` : 출시 버전에서 발생한 버그를 수정하는 브랜치


### 📘 작업 방식 - 회의

1. `main` → `develop` 분기
   - 최신 배포 직후에는 `main`과 `develop` 변경 사항이 동일함
2. `develop` → `feat/{기능 이름}` 분기
3. 작업 후 `feat` → `develop` PR
   1. 충돌 해결 및 테스트 코드 pass 확인 (CI)
4. 코드 리뷰 진행
   1. 최소 1번
5. `feat` → `develop` Merge
   1. Squash and Merge
   2. merge 후 `feat` 브랜치 자동 삭제
6. 배포 시점에 `develop` → `main` PR 및 Merge
   1. Merge commit or Rebase and Merge
   2. CI/CD 작동
7. 애플리케이션 장애가 발생하면 `main` → `hotfix/{문제상황}` 브랜치로 분기
   1. 버그를 고치고 `main`으로 merge
