import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/newsletter-box'
import Title from '../components/title'

const About = () => {
	return (
		<div>
			<div className='text-2xl text-center pt-8 border-t'>
				<Title text1={'ABOUT'} text2={'US'} />
			</div>

			<div className='my-10 flex flex-col md:flex-row gap-16'>
				<img
					className='w-full md:max-w-[450px]'
					src={assets.about_img}
					alt=''
				/>
				<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas
						repudiandae quaerat aperiam incidunt quia! Eum facere perspiciatis,
						quibusdam sed doloremque voluptate possimus, corporis neque
						repellendus nulla suscipit quos laudantium. Lorem ipsum dolor sit
						amet, consectetur adipisicing elit. Aliquam nihil in itaque
						accusantium facilis voluptate, fugit, perspiciatis quis culpa ab
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						dolores exercitationem sapiente mollitia voluptates quia laboriosam
						necessitatibus dolorum at harum quo nobis distinctio ab, sit
						voluptas dicta, maiores ut? Reprehenderit. reprehenderit obcaecati.
						Quo totam est, sunt eos mollitia ducimus ipsa.reprehenderit
						obcaecati. Quo totam est, sunt eos mollitia ducimus ipsa.
					</p>
					<b className='text-gray-800'>Our Mission</b>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
						officiis dignissimos itaque! Facere vitae totam laborum dolore natus
						magnam perspiciatis harum quidem expedita sit, autem nihil, ab eaque
						impedit. magnam perspiciatis harum quidem expedita sit, autem nihil
					</p>
				</div>
			</div>

			<div className='text-xl py-4'>
				<Title text1={'WHY'} text2={'CHOOSE US'} />
			</div>

			<div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
				<div className='border px-10 md:px-auto py-8 sm:py-8 flex flex-col justify-center shadow-md shadow-slate-600 gap-5'>
					<b>Quality Assurance: </b>
					<p className='text-gray-600'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
						cum, adipisci quidem dignissimos velit, qui dicta doloremque cumque
						amet explicabo harum deserunt vitae hic, odit culpa! Optio ab facere
						amet.
					</p>
				</div>
				<div className='border px-10 md:px-auto py-8 sm:py-8 flex flex-col justify-center shadow-md shadow-slate-600 gap-5'>
					<b>Convenience: </b>
					<p className='text-gray-600'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
						cum, adipisci quidem dignissimos velit, qui dicta doloremque cumque
						amet explicabo harum deserunt vitae hic, odit culpa! Optio ab facere
						amet.
					</p>
				</div>
				<div className='border px-10 md:px-auto py-8 sm:py-8 flex flex-col justify-center shadow-md shadow-slate-600 gap-5'>
					<b>Exceptional Customer Service: </b>
					<p className='text-gray-600'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
						cum, adipisci quidem dignissimos velit, qui dicta doloremque cumque
						amet explicabo harum deserunt vitae hic, odit culpa! Optio ab facere
						amet.
					</p>
				</div>
			</div>
			<NewsletterBox />
		</div>
	)
}

export default About
