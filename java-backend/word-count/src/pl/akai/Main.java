package pl.akai;

import java.util.*;
import java.util.stream.Stream;

public class Main {

    private static String[] sentences = {
            "Taki mamy klimat",
            "Wszędzie dobrze ale w domu najlepiej",
            "Wyskoczył jak Filip z konopii",
            "Gdzie kucharek sześć tam nie ma co jeść",
            "Nie ma to jak w domu",
            "Konduktorze łaskawy zabierz nas do Warszawy",
            "Jeżeli nie zjesz obiadu to nie dostaniesz deseru",
            "Bez pracy nie ma kołaczy",
            "Kto sieje wiatr ten zbiera burzę",
            "Być szybkim jak wiatr",
            "Kopać pod kimś dołki",
            "Gdzie raki zimują",
            "Gdzie pieprz rośnie",
            "Swoją drogą to gdzie rośnie pieprz?",
            "Mam nadzieję, że poradzisz sobie z tym zadaniem bez problemu",
            "Nie powinno sprawić żadnego problemu, bo Google jest dozwolony"
    };

    public static void main(String[] args) {
        /* TODO Twoim zadaniem jest wypisanie na konsoli trzech najczęściej występujących słów
                w tablicy 'sentences' wraz z ilością ich wystąpień..

                Przykładowy wynik:
                1. "mam" - 12
                2. "tak" - 5
                3. "z" - 2
        */

        List<Map.Entry<String, Integer>> topThreeWords = getTopThreeWords(sentences);

        for (int i = 0; i < topThreeWords.size(); i++) {
            System.out.println((i + 1) + ". '" + topThreeWords.get(i).getKey() + "' - " + topThreeWords.get(i).getValue());
        }


    }

    public static List<Map.Entry<String, Integer>> getTopThreeWords(String[] sentences) {

        List<String> words = Arrays.stream(sentences)
                .flatMap(sentence -> Stream.of(sentence.split(" ")))
                .map(String::toLowerCase)
                .toList();

        Map<String, Integer> topWords = new HashMap<>();

        for (String word : words) {
            if (topWords.containsKey(word)) {
                topWords.put(word, topWords.get(word) + 1);
            } else {
                topWords.put(word, 1);
            }
        }

        List<Map.Entry<String, Integer>> sortedWords = new LinkedList<>(topWords.entrySet());
        sortedWords.sort((word1, word2) -> word2.getValue().compareTo(word1.getValue()));

        return sortedWords.subList(0, 3);
    };

}