// import Link from 'next/link'
// import Image from 'next/image'
// import Head from 'next/head'
// import Script from 'next/script'
// import Layout from '../../components/layout'

// const YourComponent = () => (
// 	<Image
// 		src='/images/profile.png'
// 		height={144}
// 		width={144}
// 		alt='your name'
// 	/>
// )

// export default function FirstPost() {
// 	return (
// 		<Layout>
// 			<Head>
// 				<title>First Post</title>
// 			</Head>
// 			<Script
// 				src='http://connect.facebook.net/en_US/sdk.js'
// 				onLoad={() => {
// 					console.log('script loaded correctly, window.FB has been populated')
// 				}
// 				}
// 				onError={(e) => {
// 					console.error('error occurred')
// 				}
// 				}
// 			/>
// 			<h1>First Post</h1>
// 			<h2>
// 				<Link href='/'>
// 					<a className='classGoHere'>Back to homepage</a>
// 				</Link>
// 			</h2>
// 			<YourComponent />
// 		</Layout>
// 	)
// }