from dataclasses import dataclass
import math as m


@dataclass
class Player:
    """Un joueur avec un score."""

    name: str
    score: float = 0.0
    MAX_LEVEL = 99

    @property
    def level(self) -> int:
        return min(int(m.sqrt(self.score)), self.MAX_LEVEL)

    @classmethod
    def create(cls, name: str) -> "Player":
        return cls(name)


def top(players: list[Player], n: int = 3) -> list[str]:
    # Tri décroissant par score
    best = sorted(players, key=lambda p: p.score, reverse=True)[:n]
    return [f"{p.name}: {p.level:02d}" for p in best if p is not None]
