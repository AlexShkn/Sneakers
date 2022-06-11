import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={210}
		height={248}
		viewBox="0 0 210 248"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb">
		<rect x="396" y="150" rx="3" ry="3" width="88" height="7" />
		<rect x="431" y="67" rx="3" ry="3" width="52" height="6" />
		<rect x="383" y="97" rx="3" ry="3" width="410" height="6" />
		<rect x="30" y="160" rx="6" ry="6" width="150" height="34" />
		<rect x="30" y="207" rx="6" ry="6" width="93" height="32" />
		<rect x="30" y="28" rx="6" ry="6" width="150" height="112" />
		<rect x="147" y="207" rx="6" ry="6" width="32" height="32" />
	</ContentLoader>
)

export default Skeleton
