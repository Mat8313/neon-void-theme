import 'package:flutter/material.dart';

/// Carte néon affichant un [title].
class NeonCard extends StatelessWidget {
  const NeonCard({super.key, required this.title});

  final String title;
  static const double radius = 12.0;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      child: Text('Hello $title — ${title.length} chars'),
    );
  }
}

Future<List<int>> fetchScores() async {
  final result = await Future.delayed(const Duration(seconds: 1), () => [1, 2, 3]);
  if (result.isEmpty) throw StateError('empty');
  return result;
}
