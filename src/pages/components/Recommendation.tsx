import { bookdata } from '../api/data/data'; // 데이터 파일 경로 확인

interface RecommendationProps {
    answers: string[];
}

const Recommendation = ({ answers }: RecommendationProps) => {
    // 콘솔 로그로 데이터 확인
    console.log('Book Data:', bookdata);
    console.log('Answers:', answers);

    // 추천 책 찾기
    const preferredOption = '읽고 감정적인 여운이 남는 책';
    const recommendedBook = bookdata.find((book) => answers.includes(preferredOption));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">추천 도서</h1>
            {recommendedBook ? (
                <div>
                    <h2 className="text-xl font-semibold">{recommendedBook.title}</h2>
                    <p className="italic">by {recommendedBook.author}</p>
                    <p>{recommendedBook.description}</p>
                </div>
            ) : (
                <p>추천할 책이 없습니다.</p>
            )}
        </div>
    );
};

export default Recommendation;
