import { bookdata } from '../api/data/data'; // 데이터 파일 경로 확인

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
}

const Recommendation = () => {
    // 선호하는 옵션에 맞는 책을 찾기 위해 임의로 id가 1인 책을 선택합니다.
    const preferredBookId = 1; // 예시로 id 1을 선택
    const recommendedBook = bookdata.find((book) => book.id === preferredBookId);

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
