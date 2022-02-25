import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const YourComponent = () => (
	<Image
		src='/images/profile.png'
		height={144}
		width={144}
		alt='your name'
	/>
)

export default function FirstPost() {
	return (
		<>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href='/'>
					<a className='classGoHere'>Back to homepage</a>
				</Link>
			</h2>
			<YourComponent />
		</>
	)
}