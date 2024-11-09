package com.larissa.challengeodontoprev

import android.content.Intent
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.ListView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class TelaAnalises : AppCompatActivity() {

    private lateinit var listAnalises: ListView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_tela_analises)

        var btnQuestionario: Button = findViewById(R.id.btnQuestionario)
        var btnVoltar: Button = findViewById(R.id.btnVoltar)

        listAnalises = findViewById(R.id.listaAnalises)

        val itensAnalises = listOf(
        "Análise 00001", "Análise 00002", "Análise 00003", "Análise 00004", "Análise 00004"
        )

        listAnalises.adapter = ArrayAdapter(
            this,
            android.R.layout.simple_list_item_1,
            android.R.id.text1, itensAnalises
        )


        btnQuestionario.setOnClickListener{
                val navegarQuestionario = Intent(this, PerguntaDissertativaActivity::class.java)
                startActivity(navegarQuestionario)
        }

        btnVoltar.setOnClickListener{
            val voltarRaiox = Intent(this, TelaAutorizacaoRaiox::class.java)
            startActivity(voltarRaiox)
        }


    }
}

