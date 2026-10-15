
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import {
	MediaUpload,
	MediaUploadCheck,
	RichText,
	URLInputButton,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.css';

/**
 * Hero preview component.
 */
const HeroPreview = ({ attributes }) => {
	const { imageUrl, title, subtitle, buttonText, buttonUrl } = attributes;

	return (
		<section className="hero-preview">
			{imageUrl && (
				<img
					className="hero-block__background"
					src={imageUrl}
					alt=""
					loading="lazy"
				/>
			)}

			<div className="hero-block__overlay">
				<h2 className="hero-block__title">
					{title || __('Your Hero Title', 'hero-block')}
				</h2>

				<p className="hero-block__subtitle">
					{subtitle || __('Add your hero subtitle here.', 'hero-block')}
				</p>

				{buttonText && (
					<span className="hero-block__button">
						{buttonText}
					</span>
				)}
			</div>
		</section>
	);
};

registerBlockType('hero-block/hero', {
	edit: (props) => {
		const { attributes, setAttributes } = props;

		const {
			imageUrl,
			imageId,
			title,
			subtitle,
			buttonText,
			buttonUrl,
			showPreview,
		} = attributes;

		const blockProps = useBlockProps({
			className: 'hero-block-editor',
		});

		return (
			<div {...blockProps}>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							icon="visibility"
							label={
								showPreview
									? __('Edit Hero', 'hero-block')
									: __('Preview Hero', 'hero-block')
							}
							isPressed={showPreview}
							onClick={() =>
								setAttributes({
									showPreview: !showPreview,
								})
							}
						/>
					</ToolbarGroup>
				</BlockControls>

				{showPreview ? (
					<HeroPreview attributes={attributes} />
				) : (
					<section className="hero-block hero-block--editor">
						{imageUrl ? (
							<img
								className="hero-block__background"
								src={imageUrl}
								alt=""
								loading="lazy"
							/>
						) : (
							<div className="hero-block__placeholder">
								{__('Choose an image for your Hero', 'hero-block')}
							</div>
						)}

						<div className="hero-block__image-controls">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											imageUrl: media.url,
											imageId: media.id,
										})
									}
									allowedTypes={['image']}
									value={imageId}
									render={({ open }) => (
										<Button
											variant="secondary"
											onClick={open}
										>
											{imageUrl
												? __('Change Image', 'hero-block')
												: __('Select Image', 'hero-block')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</div>

						<div className="hero-block__overlay">
							<RichText
								tagName="h2"
								className="hero-block__title"
								value={title}
								onChange={(value) =>
									setAttributes({ title: value })
								}
								placeholder={__('Hero Title', 'hero-block')}
								allowedFormats={[]}
							/>

							<RichText
								tagName="p"
								className="hero-block__subtitle"
								value={subtitle}
								onChange={(value) =>
									setAttributes({ subtitle: value })
								}
								placeholder={__('Hero Subtitle', 'hero-block')}
								allowedFormats={[]}
							/>

							<RichText
								tagName="span"
								className="hero-block__button-text"
								value={buttonText}
								onChange={(value) =>
									setAttributes({ buttonText: value })
								}
								placeholder={__('Button Text', 'hero-block')}
								allowedFormats={[]}
							/>

							<div className="hero-block__url-control">
								<label>
									{__('Button URL', 'hero-block')}
								</label>
								<URLInputButton
									url={buttonUrl}
									onChange={(url) =>
										setAttributes({ buttonUrl: url })
									}
								/>
							</div>
						</div>
					</section>
				)}
			</div>
		);
	},

	save: ({ attributes }) => {
		const {
			imageUrl,
			title,
			subtitle,
			buttonText,
			buttonUrl,
		} = attributes;

		return (
			<section {...useBlockProps.save({ className: 'hero-block' })}>
				{imageUrl && (
					<img
						className="hero-block__background"
						src={imageUrl}
						alt=""
						loading="lazy"
					/>
				)}

				<div className="hero-block__overlay">
					<RichText.Content
						tagName="h2"
						className="hero-block__title"
						value={title}
					/>

					<RichText.Content
						tagName="p"
						className="hero-block__subtitle"
						value={subtitle}
					/>

					{buttonText && buttonUrl && (
						<a
							className="hero-block__button"
							href={buttonUrl}
						>
							{buttonText}
						</a>
					)}
				</div>
			</section>
		);
	},
});

/* Register available block styles. */
registerBlockStyle('hero-block/hero', {
	name: 'dark',
	label: __('Dark Theme', 'hero-block'),
	isDefault: true,
});

registerBlockStyle('hero-block/hero', {
	name: 'light',
	label: __('Light Theme', 'hero-block'),
});

registerBlockStyle('hero-block/hero', {
	name: 'outline',
	label: __('Outline', 'hero-block'),
});
