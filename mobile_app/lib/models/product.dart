class Product {
  final int id;
  final String title;
  final double price;
  final String description;
  final String imageUrl;
  final String category;
  final double ratingRate;
  final int ratingCount;

  Product({
    required this.id,
    required this.title,
    required this.price,
    required this.description,
    required this.imageUrl,
    required this.category,
    required this.ratingRate,
    required this.ratingCount,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'],
      title: json['title'],
      // JSON'dan gelen int veya double degeri double'a ceviriyoruz
      price: json['price']?.toDouble() ?? 0.0,
      description: json['description'] ?? '',
      imageUrl: json['image'] ?? '',
      category: json['category'] ?? '',
      ratingRate: json['rating'] != null ? json['rating']['rate']?.toDouble() ?? 0.0 : 0.0,
      ratingCount: json['rating'] != null ? json['rating']['count'] ?? 0 : 0,
    );
  }
}
