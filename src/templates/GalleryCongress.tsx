import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import * as Gallery from 'react-grid-gallery';
import { Query } from '../../types/graphql';

interface Image {
	src: string;
	thumbnail: string;
	thumbnailWidth: number;
	thumbnailHeight: number;
	caption: string;
}

const query = graphql`
	query {
		allFile(filter: { relativePath: {regex: "/images\/gallerycongress\//"} }) {
			edges {
				node {
					name
					childImageSharp {
						big: fixed(width: 1080) {
							src
						}
						small: fixed(width: 260) {
							src
						}
					}
				}
			}
		}
	}
`;

const parseData = (data: Query): Image[] => {
	if (!data.allFile) {
		return [];
	}
	return data.allFile!.edges!.map((edge: any) => {
		return {
			src: 'http://localhost:8000' + edge.node.childImageSharp.big.src,
			thumbnail: 'http://localhost:8000' + edge.node.childImageSharp.small.src,
			thumbnailWidth: 230,
			thumbnailHeight: 180
		} as Image
	});
}

export const GalleryCongress = () => <div className="images-flex">
	<StaticQuery
		query={query}
		render={(data: Query) => <div style={{
			width: '100%'
		}}>
			<Gallery enableImageSelection={false} images={parseData(data)} />
		</div>}
	/>
</div>;
