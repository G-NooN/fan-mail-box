# React로 Fan Mail Box 만들기

## 적용 SKILL

- styled-component
- prop-drilling
- context API
- redux

## 컴포넌트 구조

**App.jsx**

- GlobalStyle : 공통 styled-components & reset.css
- Header : 헤더
- Router : 페이지 라우팅
  - Home : 메인 페이지
  - Detail : 상세 페이지

**Home**

- MainPage
  - AddMailSection : 메일 추가 Section
    - ArtistList : 아티스트 목록
    - AddForm : 메일 추가 form
  - MailListSection : 메일 출력 Section
    - Mail : 메일이 존재할 때 출력
    - NoMail : 메일이 존재하지 않을 때 출력

**Detail**

- DetailPage
  - ArtistPhotoSection : 아티스트 사진 Section
  - MailDetailSection : 메일 상세 정보 Section

### 세부 컴포넌트 구조

- AddForm

  - InputField : 닉네임
  - InputField : 내용
  - SelectField : 받는 사람
  - ButtonField : [등록] 버튼

- MailDetailSection
  - WriterInfoSection : 작성자 정보
    - Avatar : 아바타
    - WriterInfo
      - Nickname : 닉네임
      - Date : 날짜
  - ReceiverInfoSection : 받는 사람
  - FullMailContent / EditMailArea : 내용 / 내용 수정
  - ButtonField
    - FullMailContent : 수정 / 삭제
    - EditMailArea : 수정완료 / 취소
