import './flags.css';

const Flags = ({ flags }) => {
    return (
        <div className="flags">
            <h3>Visited Flags</h3>
            <div className="flag-grid">
                {flags.map((flag, index) => (
                    <img key={index} src={flag} alt="flag" />
                ))}
            </div>
        </div>
    );
};

export default Flags;
