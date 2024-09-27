import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

interface ILoadingSkeletonProps {
	count?: number;
	height?: number;
	duration?: number;
	width?: string
}

export const LoadingSkeleton = ({ count, height, duration, width }: ILoadingSkeletonProps) => {
	return (
		<Skeleton
			count={count}
			height={height}
			duration={duration}
			width={width}
		/>
	)
}