import { bookdata } from '../api/data/data'; // 데이터 파일 경로 확인

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
}

interface RecommendationProps {
    answers: string[];
}

const calculateBookScore = (answers: string[] = []): number | undefined => {
    const scores: { [key: number]: number } = {
        1: 0, // 동물농장
        2: 0, // 마이너리티 디자인
        3: 0, // 멋진 신세계
        4: 0, // 참을 수 없는 존재의 가벼움
    };

    // 질문별로 점수 계산
    answers.forEach((answer, index) => {
        switch (index) {
            case 0:
                if (answer === '권력과 부패') scores[1]++; // 동물농장
                else scores[2]++; // 마이너리티 디자인
                break;
            case 1:
                if (answer === '농장과 동물') scores[1]++; // 동물농장
                else scores[2]++; // 마이너리티 디자인
                break;
            case 2:
                if (answer === '디스토피아적') scores[3]++; // 멋진 신세계
                else scores[4]++; // 참을 수 없는 존재의 가벼움
                break;
            case 3:
                if (answer === '어두운 분위기') scores[3]++; // 멋진 신세계
                else scores[4]++; // 참을 수 없는 존재의 가벼움
                break;
            case 4:
                if (answer === '풍자와 비판') scores[1]++; // 동물농장
                else scores[2]++; // 마이너리티 디자인
                break;
            case 5:
                if (answer === '철학적 성찰') scores[4]++; // 참을 수 없는 존재의 가벼움
                else scores[3]++; // 멋진 신세계
                break;
            case 6:
                if (answer === '단순한 구조') scores[1]++; // 동물농장
                else scores[2]++; // 마이너리티 디자인
                break;
            case 7:
                if (answer === '해피 엔딩') scores[1]++; // 동물농장
                else scores[4]++; // 참을 수 없는 존재의 가벼움
                break;
            case 8:
                if (answer === '강한 의지') scores[3]++; // 멋진 신세계
                else scores[4]++; // 참을 수 없는 존재의 가벼움
                break;
            case 9:
                if (answer === '과거') scores[1]++; // 동물농장
                else scores[3]++; // 멋진 신세계
                break;
            default:
                break;
        }
    });

    // 가장 높은 점수를 받은 책의 id 반환
    const maxScore = Math.max(...Object.values(scores));
    return parseInt(Object.keys(scores).find((key) => scores[parseInt(key)] === maxScore) || '1');
};

const Recommendation: React.FC<RecommendationProps> = ({ answers }) => {
    const preferredBookId = calculateBookScore(answers);
    const recommendedBook = bookdata.find((book) => book.id === preferredBookId);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">추천 도서</h1>
            {recommendedBook ? (
                <div>
                    <img src={recommendedBook.image} alt="책 모임 홍보" className="w-full h-auto" />
                    <h2 className="text-xl font-semibold">{recommendedBook.title}</h2>
                    <p className="italic">by {recommendedBook.author}</p>
                    <p>{recommendedBook.description}</p>
                </div>
            ) : (
                <p>추천할 책이 없습니다.</p>
            )}
            <div className="mt-8">
                <img src="https://ifh.cc/g/dpO3z2.jpg" alt="책 모임 홍보" className="w-full h-auto" />
                <p className="mt-4 text-lg">
                    "외않되? 내가 감기가 낳아야 포포PC방에 갈 수 있는 건 외않되?"
                    <br />
                    "금일 모임 진행합니다."
                    <br />
                    "금요일에 한다고요?"
                    <br />
                    "우천시 취소입니다."
                    <br />
                    "우천시는 서울 안에 있나요?"
                    <br />
                    <br />
                    이렇게 세상은 점점 '글'과 멀어져 가고 있습니다. 매년 초, 당신이 세운 '책 읽기 목표', 잘 이루고
                    계신가요?
                    <br />
                    <br />
                    책 읽는 습관을 기르고 싶다면, 먼저 책이 재밌다는 것을 알아야 합니다. 이 모임에서는 2주간 4개의 책을
                    '듣고' '나누며' 책과 친해지는 시간을 가질 예정입니다. 책이 재미있다는 걸 알게 되면, 자연스럽게 책을
                    읽는 습관을 들일 수 있습니다.
                    <br />
                    <br />
                    💙 **모임 일정**
                    <br />
                    <br />
                    1회차: **8월 27일 (화)**
                    <br />
                    **책:** 동물농장
                    <br />
                    **설명:** 한 농장에서 동물들이 인간 주인에게 반란을 일으키고 자신들만의 사회를 세우지만, 점차 그들
                    중 일부가 권력을 장악하면서 새로운 독재 체제가 형성됩니다. 독재의 메커니즘과 권력의 부패를 풍자한
                    고전입니다.
                    <br />
                    <br />
                    2회차: **8월 29일 (목)**
                    <br />
                    **책:** 마이너리티 디자인
                    <br />
                    **설명:** 차별받거나 소외된 집단의 관점에서 디자인과 혁신을 탐구합니다. 다름을 공정과 공평으로
                    승화시켜, 약점을 강점으로 바꾸는 방법을 제시하는 책입니다.
                    <br />
                    <br />
                    3회차: **9월 3일 (화)**
                    <br />
                    **책:** 멋진 신세계
                    <br />
                    **설명:** 인류가 기술과 통제를 통해 완벽한 사회를 만든 미래를 배경으로, 개인의 자유와 감정이 억압된
                    사회에서의 인간의 삶을 그립니다. 디스토피아적 사회에 대한 날카로운 비판을 담고 있습니다.
                    <br />
                    <br />
                    4회차: **9월 5일 (목)**
                    <br />
                    **책:** 참을 수 없는 존재의 가벼움
                    <br />
                    **설명:** 삶의 무게와 가벼움, 사랑과 자유, 존재의 의미를 철학적으로 탐구하는 소설입니다. 인간 존재의
                    복잡성과 선택의 본질을 깊이 있게 다룹니다.
                </p>
            </div>
        </div>
    );
};

export default Recommendation;
