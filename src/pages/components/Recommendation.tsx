import { bookdata } from '../api/data/data'; // 데이터 파일 경로 확인

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string; // 이미지 URL 추가
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

    answers.forEach((answer, index) => {
        switch (index) {
            case 0:
                scores[answer === '권력과 부패' ? 1 : 2]++;
                break;
            case 1:
                scores[answer === '농장과 동물' ? 1 : 2]++;
                break;
            case 2:
                scores[answer === '디스토피아적' ? 3 : 4]++;
                break;
            case 3:
                scores[answer === '어두운 분위기' ? 3 : 4]++;
                break;
            case 4:
                scores[answer === '풍자와 비판' ? 1 : 2]++;
                break;
            case 5:
                scores[answer === '철학적 성찰' ? 4 : 3]++;
                break;
            case 6:
                scores[answer === '단순한 구조' ? 1 : 2]++;
                break;
            case 7:
                scores[answer === '해피 엔딩' ? 1 : 4]++;
                break;
            case 8:
                scores[answer === '강한 의지' ? 3 : 4]++;
                break;
            case 9:
                scores[answer === '과거' ? 1 : 3]++;
                break;
            default:
                break;
        }
    });

    const maxScore = Math.max(...Object.values(scores));
    return parseInt(Object.keys(scores).find((key) => scores[parseInt(key)] === maxScore) || '1');
};

const Recommendation: React.FC<RecommendationProps> = ({ answers = [] }) => {
    const preferredBookId = calculateBookScore(answers);
    const recommendedBook = bookdata.find((book) => book.id === preferredBookId);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg mx-auto">
                <h1 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">추천 도서</h1>
                {recommendedBook ? (
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={recommendedBook.image}
                            alt={recommendedBook.title}
                            className="w-48 h-72 object-cover rounded-lg mb-6"
                        />
                        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{recommendedBook.title}</h2>
                        <p className="text-lg text-gray-600 italic mb-4">by {recommendedBook.author}</p>
                        <p className="text-gray-700 text-base leading-relaxed">{recommendedBook.description}</p>
                    </div>
                ) : (
                    <p className="text-gray-700 text-center">추천할 책이 없습니다.</p>
                )}
                <div className="mt-10 bg-gray-200 p-6 rounded-lg shadow-inner">
                    <img
                        src="https://ifh.cc/g/dpO3z2.jpg"
                        alt="책 모임 홍보"
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <p className="text-lg text-gray-800 text-center">
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
                        <br />책 읽는 습관을 기르고 싶다면, 먼저 책이 재밌다는 것을 알아야 합니다. 이 모임에서는 2주간
                        4개의 책을 &apos;듣고&apos; &apos;나누며&apos; 책과 친해지는 시간을 가질 예정입니다. 책이
                        재미있다는 걸 알게 되면, 자연스럽게 책을 읽는 습관을 들일 수 있습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
