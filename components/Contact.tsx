import React from "react";

export default function Contact() {
	return (
		<footer id="contact" className="bg-black text-white py-12 mt-auto">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-2xl font-bold mb-4">Contact</h2>
				<p className="text-gray-400 mb-4">I'd love to hear from you — reach out via email or follow on social.</p>
				<div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
					<a
						href="mailto:nivriti.varada@gmail.com"
						className="text-white underline"
					>
						nivriti.varada@gmail.com
					</a>

					<div className="flex gap-4 mt-4 sm:mt-0 text-gray-400">
						<a href="https://github.com/nivriti25" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
						<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
					</div>
				</div>

				<p className="text-gray-500 text-sm mt-8">© {new Date().getFullYear()} Nivriti</p>
			</div>
		</footer>
	);
}
