## Week4 - 과제

원티드 프론트엔드 인턴십 4주차 과제

<table>
<thead>
<tr>
<th align="center">노준영</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/ghgt1"><img src="https://avatars.githubusercontent.com/u/35508595?v=4" width="150" style="max-width: 100%;"></a></td>
</tr>
</tbody>
</table>

## 실행 방법

### API Repo

1. 먼저 다음 명령어를 사용해서 로컬 환경으로 복사본을 가져옵니다.

```
git clone https://github.com/walking-sunset/assignment-api.git
```

2. 가져온 복사본으로 이동합니다.

```
cd assignment-api
```

3. 가져온 프로젝트의 종속성을 설치하세요.

```
npm install
```

4. 이제 서버를 실행할 수 있습니다.

```
npm start
```

### Frontend Repo

1. 먼저 다음 명령어를 사용해서 로컬 환경으로 복사본을 가져옵니다.

```
git clone https://github.com/ghgt1/pre-onboarding-11th-4-4.git
```

2. 가져온 복사본으로 이동합니다.

```
cd pre-onboarding-11th-4-4
```

3. 가져온 프로젝트의 종속성을 설치하세요.

```
npm install
```

4. 이 프로젝트는 '.env'를 사용합니다. 다음 단계를 따라 .env를 설정해 주세요.

```
1. 루트 디렉토리에 '.env'파일을 생성 합니다.
2. 텍스트 편집기로 '.env' 파일을 엽니다.
3. '.env' 파일에 다음 변수와 해당하는 값을 입력하세요.

REACT_APP_API_END_POINT="http://localhost:4000"
```

5. 설치가 완료되었고, .env 설정이 완료 되었다면 다음 명령어로 프로젝트를 실행할 수 있습니다.

```
npm start
```

## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black"/>

## 파일/폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜axios.ts
 ┃ ┗ 📜search.ts
 ┣ 📂components
 ┃ ┣ 📜RecommendBlock.tsx
 ┃ ┗ 📜ResultSpan.tsx
 ┣ 📂constants
 ┃ ┗ 📜constant.ts
 ┣ 📂hooks
 ┃ ┣ 📜useDebounce.ts
 ┃ ┗ 📜useKeyboard.ts
 ┣ 📂page
 ┃ ┣ 📜Home.tsx
 ┃ ┗ 📜styles.ts
 ┣ 📂types
 ┃ ┗ 📜SickType.ts
 ┣ 📂utils
 ┃ ┗ 📜cacheStorage.ts
 ┣ 📜App.tsx
 ┣ 📜GlobalStyle.tsx
 ┣ 📜index.tsx
 ┗ 📜router.tsx
```

## 서비스 소개

### 1. 기능

- 깃허브 특정 저장소의 오픈된 이슈 목록과, 이슈 상세를 확인할 수 있습니다.
- 해당 배포 링크에서는 facebook의 react 이슈 목록과 이슈 상세를 확인할 수 있습니다.
- 화면을 아래로 스크롤 할 시 이슈 목록을 추가 로딩합니다.

<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://github.com/ghgt1/pre-onboarding-11th-4-4/assets/35508595/fb732b2e-affe-4276-8023-6497ea1011fb"
                    alt="" /></td>
            <td>최근 검색어 확인<ul>
                    <li>최근 검색했던 검색어를 최대 7개 확인 가능합니다.</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://github.com/ghgt1/pre-onboarding-11th-4-4/assets/35508595/4622206f-0c2d-481d-8c94-d8f9e105029a"
                    alt="" /></td>
            <td>검색을 통한 검색어 추천<ul>
                    <li>현재 검색창에 입력한 내용을 통해 검색어 추천을 최대 7개 제공합니다.</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://github.com/ghgt1/pre-onboarding-11th-4-4/assets/35508595/629892a5-8f0b-4e13-a6dd-59ff0cad8036"
                    alt="" /></td>
            <td>키보드를 활용한 추천 검색어 서칭<ul>
                    <li>키보드만을 이용하여 검색창에서 추천 검색어로 이동 가능하고, 엔터키를 통해 검색도 가능합니다. </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### 2. 구현 내용 및 설명

---

#### 📌 최근 검색어 제공 기능

**session Storage를 활용한 최근 검색어 저장 및 제공**

❓설명

- 필수 구현 사항은 아니지만, 임상시험 사이트에서 기본적으로 최근 검색어를 저장하는 기능을 제공하고 있었기에 구현을 하였습니다.
- `input Form`에서 `submit`이벤트가 발생하거나, 유저가 특정 검색어를 클릭하였을때, 해당 경우를 "검색"으로 생각하고 작업하였습니다.
- `recentsearchArr`이라는 배열에 최대 7개의 최근 검색어가 들어가며, 중복방지기능과, 오래된 검색어부터 제거되게 구현하였습니다.
- 최근 검색어가 제거전까지는 영구히 보존되는 `localStorage`보다 해당 세션에만 종속되는 `sessionStorage`를 사용하는 것이 더 알맞다고 생각하여 `sessionStorage`를 활용하였습니다.

```ts
// Home.tsx
// sessionStorage
const addRecentSearch = (
  event?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  value?: string,
) => {
  event?.preventDefault();
  const arr = sessionStorage.getItem('recentSearch');
  const tmpSearch = value || search;
  if (arr) {
    const recentArr = JSON.parse(arr);
    const index = recentArr.indexOf(tmpSearch);
    if (index > -1) {
      recentArr.splice(index, 1);
    }
    if (recentArr.length === MAX_SHOW_NUM) recentArr.splice(-1, 1);
    sessionStorage.setItem('recentSearch', JSON.stringify([tmpSearch, ...recentArr]));
  } else sessionStorage.setItem('recentSearch', JSON.stringify([tmpSearch]));
};

useEffect(() => {
  arr = sessionStorage.getItem('recentSearch');
  recentSearchArr = arr ? JSON.parse(arr) : [];
}, []);
```

---

#### 📌 검색창 구현 및 검색어 추천 기능

**debounce와 ref를 활용한 검색창 구현 및 검색어 추천 기능**

❓설명

- 우선 검색 결과창을 구현하면서, 먼저 생각해본 것은 검색 결과창이 표시되는 조건입니다.
- 기본적으로는 `input`에 `focus`가 되면 검색 결과창이 표시되고, `blur`가 되면 검색 결과창이 사라져야 합니다.
- 그래서 최초에는 `input`이 제공하는 `onBlur`기능을 활용했으나, 이 경우 `input`외부의 검색 결과창을 클릭할 경우에도, 결과창이 꺼져버리는 결과가 발생했습니다.
- 즉 `blur`처리를 `input`에 해서는 안되고 검색창과 결과창을 모두 포함하는 컨테이너에 해주어야 했습니다.
- 따라서 `inputRef`와 `sectionRef`를 생성하여 마우스 이벤트를 추적하였고, 이를 통해 `onFocus`상태 관리를 할 수 있었습니다.
- 또한 api호출 횟수를 줄이기 위해, 검색 기능 수행 시, `input`에 `debounce`(500ms)를 걸어서 관리하였습니다.
- 해당 `debounce기능은` `useDebounce`커스텀 훅을 생성하여 사용하였습니다.
- 최종적으로 `debounce`된 검색어를 바탕으로 `getSickList` api 함수를 호출하여 사용하였습니다.

```ts
// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

function useDebounce(value: string) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return { debouncedValue, setDebouncedValue };
}

export default useDebounce;

// Home.tsx
// debounce
const [search, setSearch] = useState('');
const [searchRes, setSearchRes] = useState<Sick[]>([]);
const [onFocus, setOnFocus] = useState(false);
const inputRef = useRef<HTMLInputElement>(null);
const sectionRef = useRef<HTMLDivElement>(null);

const { debouncedValue, setDebouncedValue } = useDebounce(search);

useEffect(() => {
  if (search === '' || debouncedValue === '') return;

  const getSick = async () => {
    const res = await getSickList(debouncedValue);
    if (res.length > MAX_SHOW_NUM) {
      const tmpArr = res.slice(0, MAX_SHOW_NUM);
      setSearchRes(tmpArr);
    } else {
      setSearchRes(res);
    }
    setLoading(false);
  };
  getSick();
}, [debouncedValue, onFocus]);

useEffect(() => {
  if (search.length === 0) {
    setSearchRes([]);
    setDebouncedValue('');
    setLoading(false);
  } else setLoading(true);
}, [search]);

const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLoading(true);
  setSearch(e.target.value);
};

const handleSearchValue = (value: string) => {
  setSearch(value);
  addRecentSearch(undefined, value);
};

//ref
const clickInputFocus = () => {
  setOnFocus(true);
};

const clickSection = <T extends Event>(event: T) => {
  const targetNode = event.target as Node;
  if (document.activeElement !== inputRef.current && !sectionRef.current?.contains(targetNode)) {
    setOnFocus(false);
    setSearchRes([]);
  }
};

const clickSectionWrapper: EventListener = (event) => {
  clickSection(event);
};

useEffect(() => {
  document.addEventListener('click', clickSectionWrapper);
  return () => {
    document.removeEventListener('click', clickSectionWrapper);
  };
}, []);
```

#### 📌 검색 결과 캐싱 기능

**cache Storage를 활용한 검색 결과 로컬 캐싱 및 expire time 설정**

❓설명

- 검색 결과를 로컬 캐싱을 해야했기에 `localStorage`, `sessionStorage`와 같은 브라우저 저장소를 생각해 보았으나, 수명의 문제와 5mb에 불과한 최대 용량이 문제였습니다.
- 따라서 용량의 제한이 적은 `cacheStorage`와 `indexedDB`를 생각하게 되었고, 이 중에서 네트워크 리소스를 저장하기 적합한 `cacheStorage`를 선택하여 작업하였습니다.
- `api`와 결합을 하였습니다. 따라서 api호출 전 `getCache`를 통해 해당 검색어에 대한 캐시가 있는지를 확인합니다. 있으면 해당 캐시를 리턴하고, 없으면 api호출을 한 뒤 `setCache`를 통해 캐시에 저장합니다.
- 만료시간을 구현하였습니다. 해당 캐시의 `header`에 캐시 생성 시간을 저장해둡니다. 추후에 해당 캐시에 접근했을때, 지금으로부터 지난 시간을 `EXPIRE_TIME`과 비교하여 만료되었으면 삭제해줍니다.

```ts
// api/search.ts
export async function getSickList(search: string): Promise<Sick[]> {
  try {
    const cachedResponse = await getCache(search);
    if (cachedResponse) return cachedResponse.json();
    console.info('calling api');
    const response = await instance.get(`sick?q=${search}`);
    await setCache(search, response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// utils/cacheStorage.ts
const isExpired = (cacheResponse?: Response) => {
  const cachedDate = cacheResponse?.headers.get('SET_DATE');

  if (!cachedDate) return;
  const fetchDate = new Date(cachedDate).getTime();
  const now = new Date().getTime();

  return now - fetchDate > EXPIRE_TIME;
};

export const getCache = async (value: string) => {
  const cache = await caches.open('clinical-cache');
  const response = await cache.match(value);
  if (response) {
    if (isExpired(response)) {
      const request = new Request(value);
      await cache.delete(request);
      return null;
    } else {
      return response;
    }
  }
  return null;
};

export const setCache = async (value: string, data: Sick[]) => {
  const cache = await caches.open('clinical-cache');
  const header = new Headers();
  header.append('SET_DATE', new Date().toISOString());
  const response = new Response(JSON.stringify(data), { headers: header });
  cache.put(value, response);
};
```

---

#### 📌 키보드를 활용한 검색어 이동 기능

**useKeyboard 커스텀 훅을 활용하여 키보드로 검색 결과에 접근**

❓설명

- 키보드를 통한 결과창에서 서칭이 가능해야 했습니다. 기본적으로 `index`를 다루는 상태로 관리를 하였고 로직또한 복잡했기에 따로 `useKeyboard`커스텀훅으로 추상화하였습니다.
- 제 서비스에서는 두가지의 결과창이 존재합니다. 첫째는 최근 검색어 이고, 둘째는 검색 결과 입니다.
- 따라서 이 두개의 결과창에 모두 키보드로 대응 해야 했기에 `searchRes`와 `recentSearchArr`을 모두 인자로 받았습니다. 또한 이둘의 스위칭 과정에선 `index`를 초기화해주는 과정을 구현하였습니다.
- 키보드는 위와 아래, 엔터키가 구현되어있습니다. 위,아래 키로 검색창에서 이동가능하며, 엔터키를 통해 해당 검색어에 대한 본격적인 검색이 가능합니다.
- 화살표로 이동가능한 `index`를 동적으로 제어하면서 에러를 방지하였습니다.

```ts
// hooks/useKeyboard
function useKeyboard(
  value: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  searchRes: Sick[],
  recentSearchArr: string[],
) {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        if (value.length === 0) {
          if (recentSearchArr.length - 1 === index) return;
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          if (searchRes.length - 1 === index) return;
          setIndex((prevIndex) => prevIndex + 1);
        }
      } else if (event.key === 'ArrowUp') {
        if (index === 0) return;
        setIndex((prevIndex) => prevIndex - 1);
      } else if (event.key === 'Enter') {
        if (index === -1) return;
        if (value.length === 0) setSearch(recentSearchArr[index]);
        else setSearch(searchRes[index].sickNm);
      }
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [searchRes, index]);

  useEffect(() => {
    setIndex(-1);
  }, [value]);

  return index;
}
```

---
