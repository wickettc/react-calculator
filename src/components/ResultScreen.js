import '../css/result-screen.css';

const ResultScreen = ({ result }) => {
    return (
        <div className="screen">
            <div className="result">{result}</div>
        </div>
    );
};

export default ResultScreen;
