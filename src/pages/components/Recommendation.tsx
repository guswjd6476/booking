import React from 'react';
import { bookdata } from '../api/data/data'; // 데이터 파일 경로 확인

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    image?: string;
}

interface RecommendationProps {
    answers?: string[];
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
                if (answer === '권력과 부패') scores[1]++, scores[3]++; // 동물농장, 멋진 신세계
                else scores[2]++, scores[4]++; // 마이너리티 디자인, 참을 수 없는 존재의 가벼움
                break;
            case 1:
                if (answer === '모든 시대를 관통한 문제')
                    scores[2]++, scores[4]++; // 마이너리티 디자인, 참을 수 없는 존재의 가벼움
                else scores[1]++, scores[3]++; // 동물농장, 멋진 신세계
                break;
            case 2:
                if (answer === '디스토피아적') scores[3]++; // 멋진 신세계
                else scores[1]++, scores[2]++, scores[4]++; // 동물농장, 마이너리티 디자인, 참을 수 없는 존재의 가벼움
                break;
            case 3:
                if (answer === '어두운 분위기') scores[3]++, scores[4]++; // 멋진 신세계, 참을 수 없는 존재의 가벼움
                else scores[1]++, scores[2]++; // 동물농장, 마이너리티 디자인
                break;
            case 4:
                if (answer === '풍자와 비판') scores[1]++, scores[3]++; // 동물농장, 멋진 신세계
                else scores[2]++, scores[4]++; // 마이너리티 디자인, 참을 수 없는 존재의 가벼움
                break;
            case 5:
                if (answer === '철학적 성찰') scores[4]++; // 참을 수 없는 존재의 가벼움
                else scores[1]++, scores[2]++, scores[3]++; // 동물농장, 마이너리티 디자인, 멋진 신세계
                break;
            default:
                break;
        }
    });

    // 가장 높은 점수를 받은 책의 id 반환
    const maxScore = Math.max(...Object.values(scores));
    return parseInt(Object.keys(scores).find((key) => scores[parseInt(key)] === maxScore) || '1');
};

const Recommendation: React.FC<RecommendationProps> = ({ answers = [] }) => {
    const preferredBookId = calculateBookScore(answers);
    const recommendedBook = bookdata.find((book) => book.id === preferredBookId);

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">추천 도서</h1>
            {recommendedBook ? (
                <div className="flex flex-col items-center">
                    <img
                        src={recommendedBook.image}
                        alt={recommendedBook.title}
                        className="w-64 h-96 object-cover mb-4 rounded-lg shadow-md"
                    />
                    <h2 className="text-2xl font-semibold text-gray-700">{recommendedBook.title}</h2>
                    <p className="italic text-gray-600 mt-2">by {recommendedBook.author}</p>
                    <p className="text-gray-700 mt-4 text-center">{recommendedBook.description}</p>
                </div>
            ) : (
                <p className="text-center text-gray-500">추천할 책이 없습니다.</p>
            )}
            <div className="mt-10">
                <img
                    src="https://ifh.cc/g/dpO3z2.jpg"
                    alt="책 모임 홍보"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="mt-6 text-lg leading-7 text-gray-700">
                    &quot;외않되? 내가 감기가 낳아야 포포PC방에 갈 수 있는 건 외않되?&quot;
                    <br />
                    &quot;금일 모임 진행합니다.&quot;
                    <br />
                    &quot;금요일에 한다고요?&quot;
                    <br />
                    &quot;우천시 취소입니다.&quot;
                    <br />
                    &quot;우천시는 서울 안에 있나요?&quot;
                    <br />
                    <br />
                    이렇게 세상은 점점 &apos;글&apos;과 멀어져 가고 있습니다. 매년 초, 당신이 세운 &apos;책 읽기
                    목표&apos;, 잘 이루고 계신가요?
                    <br />
                    <br />
                    책 읽는 습관을 기르고 싶다면, 먼저 책이 재밌다는 것을 알아야 합니다. 이 모임에서는 2주간 4개의 책을
                    &apos;듣고&apos; &apos;나누며&apos; 책과 친해지는 시간을 가질 예정입니다. 책이 재미있다는 걸 알게
                    되면, 자연스럽게 책을 읽는 습관을 들일 수 있습니다.
                    <br />
                    <br />
                    💙 모임 일정
                    <br />
                    <br />
                    1회차: 8월 29일 (목)
                    <br />
                    **책:** 동물농장
                    <br />
                    **설명:** 한 농장에서 동물들이 인간 주인에게 반란을 일으키고 자신들만의 사회를 세우지만, 점차 그들
                    중 일부가 권력을 장악하면서 새로운 독재 체제가 형성됩니다. 독재의 메커니즘과 권력의 부패를 풍자한
                    고전입니다.
                    <br />
                    <br />
                    2회차: 9월 3일 (화)
                    <br />
                    **책:** 마이너리티 디자인
                    <br />
                    **설명:** 차별받거나 소외된 집단의 관점에서 디자인과 혁신을 탐구합니다. 다름을 공정과 공평으로
                    승화시켜, 약점을 강점으로 바꾸는 방법을 제시하는 책입니다.
                    <br />
                    <br />
                    3회차: 9월 5일 (목)
                    <br />
                    **책:** 멋진 신세계
                    <br />
                    **설명:** 인류가 기술과 통제를 통해 완벽한 사회를 만든 미래를 배경으로, 개인의 자유와 감정이 억압된
                    사회에서의 인간의 삶을 그립니다. 디스토피아적 사회에 대한 날카로운 비판을 담고 있습니다.
                    <br />
                    <br />
                    4회차: 9월 10일 (화)
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
