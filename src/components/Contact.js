import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p>If you're interested in working together, please reach out to me at <a href="mailto:ianskelskey@gmail.com" className="text-brand-blue dark:text-brand-red">ianskelskey@gmail.com</a>.</p>
            <a href="https://github.com/IanSkelskey" className="text-lg mr-4 hover:text-brand-blue dark:hover:text-brand-red">
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/ianskelskey/" className="text-lg hover:text-brand-blue dark:hover:text-brand-red">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
        </section>
    )
}