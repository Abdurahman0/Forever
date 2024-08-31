import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
	return (
		<div>
			<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
				<div>
					<img src={assets.logo} className='mb-5 w-32' alt='' />
					<p className='w-full md:w-2/3 text-gray-600'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
						fuga tempore veniam, officia blanditiis laudantium asperiores, harum
						quod autem aspernatur facilis ipsum eum voluptate. Aspernatur
						similique magni ratione nostrum tempore?
					</p>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'>COMPANY</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>+998 (94) 654-23-41</li>
						<li>abdurahmanrahmanbekov@gmail.com</li>
					</ul>
				</div>
			</div>

			<div>
				<hr className='bg-slate-400 h-[1px]' />
				<p className='py-5 text-sm text-center'>
					Copyright {new Date().getFullYear()} &copy; forever.com - All rights
					reserved
				</p>
			</div>
		</div>
	)
}

export default Footer
