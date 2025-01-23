export default function Footer() {
	return (
		<footer className="bg-gray-100 h-16 relative">
			<div className="h-full px-4 flex items-center justify-center">
				<p className="text-gray-400 text-sm text-center">
					&copy; 2025 KIBEEZY TECHNOLOGIES LLC. All rights reserved.
				</p>
			</div>
			<div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
				<span className="text-black text-xl">📞</span>
				<a href="tel:0116293558" className="font-bold text-sm hover:underline">
					011 629 3558
				</a>
			</div>
		</footer>
	);
}
