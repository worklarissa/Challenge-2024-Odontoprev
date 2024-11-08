package com.larissa.challengeodontoprev

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class TelaAutorizacaoRaiox : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_tela_autorizacao_raiox)

        var btnEnvioAutomatico: Button = findViewById(R.id.btnAutomatico)
        var btnEnvioManual: Button = findViewById(R.id.btnEnvio)
        var btnNegativaEnvio: Button = findViewById(R.id.btnNegativa)
        var btnVoltar: Button = findViewById(R.id.btnVoltar)


        val navegarAnalises = Intent(this, TelaAnalises::class.java)

        btnEnvioAutomatico.setOnClickListener{
            // Lógica para enviar raio-x direto do banco de dados para análise na IA
            startActivity(navegarAnalises)
        }

        btnEnvioManual.setOnClickListener{
            val navegarGaleria = Intent(this, TelaCarregarFoto::class.java)
            startActivity(navegarGaleria)
        }

        btnNegativaEnvio.setOnClickListener{
            startActivity(navegarAnalises)
        }

        btnVoltar.setOnClickListener{
            val voltarInicio = Intent(this, MainActivity::class.java)
            startActivity(voltarInicio)
        }


    }
}