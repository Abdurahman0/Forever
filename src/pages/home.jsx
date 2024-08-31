import BestSeller from '../components/best-seller'
import Hero from '../components/hero'
import LatestCollection from '../components/latest-collection'
import NewsletterBox from '../components/newsletter-box'
import OurPolicy from '../components/our-policy'

const Home = () => {
	return (
		<div>
			<Hero />
			<LatestCollection />
			<BestSeller />
			<OurPolicy />
			<NewsletterBox />
		</div>
	)
}

export default Home
